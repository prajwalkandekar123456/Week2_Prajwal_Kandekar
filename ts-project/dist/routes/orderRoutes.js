"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
exports.orderRoutes = router;
router.post("/", orderController_1.processOrders);
