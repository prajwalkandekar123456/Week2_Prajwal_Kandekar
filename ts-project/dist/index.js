"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const orderRoutes_1 = require("./routes/orderRoutes");
const arrayRoutes_1 = require("./routes/arrayRoutes");
const db_1 = require("./utils/db");
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Connect to the database
(0, db_1.connectDb)();
// Use routes
app.use("/api/orders", orderRoutes_1.orderRoutes);
app.use("/api/array-operations", arrayRoutes_1.arrayRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
