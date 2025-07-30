import express from "express";
import { getAllPackages, createPackage } from "../controllers/packageController.js";

const router = express.Router();

router.get("/", getAllPackages);
router.post("/", createPackage);

export default router;
