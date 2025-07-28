import express from "express";
import "dotenv/config";
import { dbConnection } from "./api/lib/db_connection.js";
import userRouter from "./api/routes/auth.routes.js";
import postRouter from "./api/routes/posts.routes.js";
import commentRouter from "./api/routes/comment.routes.js";
import cors from "cors";
import job from "./api/lib/cron.js";

const app = express();

// cron job
job.start();

// cors
app.use(cors())

// db conn
dbConnection();

// routing
app.use(express.json());
app.use("/auth",userRouter);
app.use("/post",postRouter)
app.use("/comment", commentRouter)

app.get("/",(req,res) => {
    res.json({
        message: "Get Req From Server"
    })
})

app.listen(3000,() => {console.log("App Running on 3000")})