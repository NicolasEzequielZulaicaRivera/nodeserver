import express from "express";
import dotenv from "dotenv";
import service_routes from "./routes/service.js";
dotenv.config();

const app = express();

// Settings
const port = process.env.PORT || 8080;
app.set("port", port);
app.set("json spaces", 2);

// Middleware
app.use(express.json());

// Routes
app.use("/api/service", service_routes);

// Server
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
