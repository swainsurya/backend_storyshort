import { postModel } from "../models/postModel.js";
import { userModel } from "../models/userModel.js";

export const createPost = async (req, res) => {
    const { ownerId, description, image } = req.body;
    if(!ownerId) {
        return res.json({
            message: "Owner required",
            success: false
        })
    }
    try {
        const owner = await userModel.findById(ownerId);

        const post = new postModel({
            ownerId,
            description,
            image,
            ownerName: owner.username
        })
        await post.save();
        return res.json({
            message: "Post created success",
            success: true,
            post
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            success: false
        })
    }
}

export const delPost = async(req,res) => {
    const {ownerId, postId} = req.body;
    try {
        const post = await postModel.findOneAndDelete({ownerId, _id: postId});
        await post.save();
        return res.json({
            message: "Post Deleted",
            success: true
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            success: false
        })
    }
}

export const getPost = async(req, res) => {
    const { ownerId } = req.body;
    try {
        const posts = await postModel.find({ownerId});
        return res.json({
            message: "your own posts",
            posts: posts.reverse()
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            success: false
        })
    }
}

export const getAllPosts = async(req,res) => {
    const allPosts = await postModel.find();
    return res.json({
        message: "All posts",
        allPosts: allPosts.reverse()
    })
}