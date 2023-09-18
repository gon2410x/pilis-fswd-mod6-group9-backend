import { Router } from "express";
import { getContainertypes } from "../controllers/containerType.controller";


const router = Router();

router.get("/containertypes", getContainertypes );

export default router;