import { Router } from "express";
import { getDepartments } from "../controllers/department.controller";


const router = Router();

router.post("/departments", getDepartments);


export default router;