import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderApp from "./helpers/renderApp";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["X-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderApp(req, store, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
