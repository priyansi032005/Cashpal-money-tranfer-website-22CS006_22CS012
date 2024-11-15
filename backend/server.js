const express = require("express");
const cors = require("cors");
const app = express();

// Allow CORS for all origins
app.use(cors());

// Or if you want to restrict CORS to specific origins:
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
  })
);
