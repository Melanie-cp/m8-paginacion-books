import { Router } from "express";
import { BookController } from "../controllers/book.controller.js";

const router = Router()

// PATH: /api/v1/books

router.get('/', BookController.getBooks)
router.get('/:id', BookController.getBookById)
router.post('/', BookController.createBook)
router.put('/:id', BookController.updateBook)
router.delete('/:id', BookController.removeBook)

export default router;