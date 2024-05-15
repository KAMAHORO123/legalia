const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/legalia", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
