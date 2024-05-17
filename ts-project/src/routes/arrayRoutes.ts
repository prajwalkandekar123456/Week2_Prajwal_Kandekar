import { Router } from "express";
import { arrayOperations } from "../controllers/arrayController";

const router = Router();

router.post("/", arrayOperations);

export { router as arrayRoutes };
