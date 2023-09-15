import { Router } from "express";
import { getLocation, createlocation, updateLocation, deleteLocation} from "../controllers/location.controller";


const router = Router();

router.get("/location", getLocation);
router.post("/location", createlocation);
router.put("/location/:id", updateLocation);
router.delete("/location/:id", deleteLocation);

export default router;
