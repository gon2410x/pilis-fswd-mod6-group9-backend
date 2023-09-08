import { Router } from "express";
import { getProvince, getProv } from "../controllers/province.controller";



const router = Router();


router.get("/provinces", getProv);
router.get("/province/:id", getProvince);

export default router;