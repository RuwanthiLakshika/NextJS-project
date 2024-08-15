import { verify } from "crypto";
import mongoose from "mongoose";
import { use } from "react";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isFinite: {
        type: Boolean,
        default: false,
    },
    forgotPassword: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("User", userSchema);

export default User;
