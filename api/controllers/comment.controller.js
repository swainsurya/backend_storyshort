import { commentModel } from "../models/commentModel.js";

export const createComment = async(req, res) => {
    const {userId, postId, message} = req.body ;
    try {
        const comment = new commentModel({userId, postId, message});
        await comment.save();
        return res.json({
            message: "Comment added",
            comment
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            error
        })
    }
}

export const getCommentByPost = async(req, res) => {
    const {postId} = req.body;
    try {
        const comments = await commentModel.find({postId});
        return res.json({
            message: "All comments",
            comments
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            error
        })
    }
}