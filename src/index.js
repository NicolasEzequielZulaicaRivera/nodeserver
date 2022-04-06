import express from "express";
import dotenv from "dotenv";
import service_routes from "./routes/service.js";
import util_routes from "./routes/util.js";
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
app.use("/api", util_routes);

// Server
const server = app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

export { app, server };
