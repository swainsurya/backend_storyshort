import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: { type:String, required: true, ref: "user" },
    postId: { type:String, required: true, ref: "post" },
    message: { type:String, required: true }
},{timestamps: true})

export const commentModel = await mongoose.model("comments", commentSchema);