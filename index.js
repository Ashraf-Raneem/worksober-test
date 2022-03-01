const express = require("express");
const UserData = require("./config/Data");
const app = express();
const port = 3000;

let users = UserData;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((el) => el._id === req.params.id);
  if (!user) {
    res.status(404).send("No user was found with that id");
  }
  res.send(user);
});

app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((el) => el._id === req.params.id);
  if (!userIndex) {
    res.status(404).send("No user was found with that id");
  }
  users = users.filter((el) => el._id !== req.params.id);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
