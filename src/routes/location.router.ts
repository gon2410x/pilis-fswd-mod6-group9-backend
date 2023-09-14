import { Router } from "express";
import { getLocation, createlocation } from "../controllers/location.controller";


const router = Router();

router.get("/location", getLocation);
router.post("/location", createlocation);

export default router;
