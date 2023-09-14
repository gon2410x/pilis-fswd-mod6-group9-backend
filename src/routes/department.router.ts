import { Router } from "express";
import { createDepto, getDeps,updateDepartment,deleteDepartment } from "../controllers/department.controller";


const router = Router();

router.get("/department", getDeps);
router.post("/department", createDepto);
router.put("/department/:id", updateDepartment);
router.delete("/department/:id", deleteDepartment);
export default router;