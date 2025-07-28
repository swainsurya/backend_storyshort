import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    ownerId: { type:String, required: true, ref: "user" },
    ownerName: { type:String, required: true },
    description: { type:String, required: true },
    image: { type:String, required: true },
    like: []
},{timestamps: true})

export const postModel = await mongoose.model("post",postSchema);