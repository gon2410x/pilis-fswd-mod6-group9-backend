import { Router } from "express";
import {getContainers, createContainer, updateContainer, deleteContainer} from "../controllers/container.controller";

const router = Router();

router.get("/containers", getContainers);
router.post("/containers", createContainer);
router.put("/containers/:id", updateContainer);
router.delete("/containers/:id", deleteContainer);

export default router;
