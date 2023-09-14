import { Router } from "express";
import { getProvince, getProv, createProvince, updateProvince, deleteProvince } from "../controllers/province.controller";



const router = Router();


router.get("/provinces", getProv);
router.get("/province/:id", getProvince);
router.post("/province", createProvince);
router.put("/province/:id", updateProvince);
router.delete("/province/:id", deleteProvince);
export default router;