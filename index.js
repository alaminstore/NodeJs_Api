const express = require("express");
const path = require("path");
const members = require("./Members");
const app = express();

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello There!!</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//Get All Members
app.get("/api/member", (req, res) => res.json(members));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
