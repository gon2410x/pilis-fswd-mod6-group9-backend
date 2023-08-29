import { Router } from "express";
import {getOrganizations, createOrganization, updateOrganization, deleteOrganization } from "../controllers/organization.controller";

const router = Router();

router.get("/organizations", getOrganizations);
router.post("/organizations", createOrganization);
router.put("/organizations/:id", updateOrganization);
router.delete("/organizations/:id", deleteOrganization);

export default router;