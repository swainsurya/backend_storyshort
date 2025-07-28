import { Router } from "express";
import { createPost, delPost, getAllPosts, getPost } from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post("/create", createPost);
postRouter.delete("/del", delPost);
postRouter.get("/get-all-posts", getAllPosts);
postRouter.post("/get-own-posts", getPost);

export default postRouter ;