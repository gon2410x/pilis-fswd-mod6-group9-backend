import { Router } from "express";
import { getDeps } from "../controllers/department.controller";


const router = Router();

router.get("/department", getDeps);


export default router;