var express = require("express");
var UserData = require("./config/Data");
var app = express();

var cors = require('cors')

var port = 3000;
var app = express()

let users = UserData;

app.use(cors());

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

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../worksober-frontend/build")));

// // All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "../worksober-frontend/build", "index.html")
//   );
// });

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
