import { Router } from "express";
import { getLocation } from "../controllers/location.controller";


const router = Router();

router.get("/location", getLocation);


export default router;
