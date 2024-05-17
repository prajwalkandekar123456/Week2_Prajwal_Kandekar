import { Router } from "express";
import { processOrders } from "../controllers/orderController";

const router = Router();

router.post("/", processOrders);

export { router as orderRoutes };
