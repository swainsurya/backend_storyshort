import { Router } from "express";
import { createComment, getCommentByPost } from "../controllers/comment.controller.js";

const commentRouter = Router();

commentRouter.post("/add-comment", createComment);
commentRouter.post("/get-comment", getCommentByPost);

export default commentRouter;