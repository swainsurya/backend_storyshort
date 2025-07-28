import { Router } from "express";
import { login, registration } from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.post("/register",registration);
userRouter.post("/login", login);

export default userRouter;