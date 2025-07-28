import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registration = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.json({
                message: "User Already Exists",
                success: false
            })
        }
        const hashPassword = await bcrypt.hashSync(password, 10);
        const newUser = new userModel({ username, email, password: hashPassword });
        await newUser.save();
        return res.json({
            message: "Registration Success",
            success: true
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            success: false,
            error
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                message: "User not found",
                success: false
            })
        }
        const comparePass = await bcrypt.compareSync(password, user.password);
        if (!comparePass) {
            return res.json({
                message: "Incorrect Password",
                success: false
            })
        }
        return res.json({
            message: "Login Success",
            success: true,
            user
        })
    } catch (error) {
        return res.json({
            message: "Internal server error",
            success: false
        })
    }
}