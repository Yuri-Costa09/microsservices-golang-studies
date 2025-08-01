import express from "express";


const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// GET: info
// http://localhost:3000/info
app.get("/info", (req, res) => {
  res.send("Hello World");
});
