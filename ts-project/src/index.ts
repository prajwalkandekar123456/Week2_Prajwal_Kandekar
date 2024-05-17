import express from "express";
import bodyParser from "body-parser";
import { orderRoutes } from "./routes/orderRoutes";
import { arrayRoutes } from "./routes/arrayRoutes";
import { connectDb } from "./utils/db";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to the database
connectDb();

// Use routes
app.use("/api/orders", orderRoutes);
app.use("/api/array-operations", arrayRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
