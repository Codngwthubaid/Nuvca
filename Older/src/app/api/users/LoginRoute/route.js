import connect from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
require('dotenv').config();
connect();

export async function POST(request) {
        const resBody = await request.json();
        const { userName, password } = resBody;
        console.log(resBody);

        // Getting User
        const userExisting = await User.findOne({ userName });
        // Cross-checking of user existence
        if (!userExisting) {
            return NextResponse.json(
                { error: "User not exist !!!" },
                { status: 400 }
            );
        }

        // Password Compare
        const validatePassword = await bcryptjs.compare(password, userExisting.password);
        if (!validatePassword) {
            return NextResponse.json({
                message: "Incorrect Password !!!",
                status: 500,
            });
        }

        // Creating Token Data
        const tokenData = {
            id: userExisting._id,
            email: userExisting.email,
            userName: userExisting.userName
        };

        console.log(process.env.TOKEN_SECRET);

        // TokenSetting
        const Token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        console.log("Generated Token:", Token);

        // Creating Response
        const response = NextResponse.json({
            message: "Successfully Login",
            success: true
        });

        response.cookies.set("Token", Token, {
            httpOnly: true,
        });

        return response;
}
