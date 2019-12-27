import express from "express";
import renderApp from "./helpers/renderApp";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderApp());
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
