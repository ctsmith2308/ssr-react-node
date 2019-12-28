import express from "express";
import renderApp from "./helpers/renderApp";
import createStore from "./helpers/createStore";

const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderApp(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
