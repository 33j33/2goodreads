import express from "express";
import { createRating } from "../controllers/rating.controller";

const router = express.Router();

router.post("/", createRating);

export default router;
