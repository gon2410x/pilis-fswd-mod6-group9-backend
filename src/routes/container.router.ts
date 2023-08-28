import { Router } from "express";
import {getContainers} from "../controllers/container.controller";

const router = Router();

router.get("/containers", getContainers);


export default router;
