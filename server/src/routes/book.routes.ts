import express from "express";
import { getBookById, getBooks } from "../controllers/book.controller";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);

export default router;
