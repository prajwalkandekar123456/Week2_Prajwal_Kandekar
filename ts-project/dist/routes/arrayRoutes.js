"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayRoutes = void 0;
const express_1 = require("express");
const arrayController_1 = require("../controllers/arrayController");
const router = (0, express_1.Router)();
exports.arrayRoutes = router;
router.post("/", arrayController_1.arrayOperations);
