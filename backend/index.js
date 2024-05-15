const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const debug = require("debug")("api");

const userRoutes = require("./routes/user");
const casesRoutes = require("./routes/cases");
const connectDb = require("./config/db");


dotenv.config();
connectDb();

// Application
const app = express();

const options = {};

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use("/api/user", userRoutes);
app.use("/api/cases", casesRoutes);

app.listen(process.env.PORT, () => {
  console.log("🚀 server started running on port 4000");
});
