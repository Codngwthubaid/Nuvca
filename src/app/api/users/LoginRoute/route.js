import connect from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try {
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

        // TokenSetting
        try {
            const Token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "10min" });
            console.log("Generated Token:", Token);
        } catch (err) {
            console.log("Error generating token:", err);
            return NextResponse.json({
                message: "Internal Server Error",
                status: 500
            });
        }

        // Creating Response
        const response = NextResponse.json({
            message: "Successfully Login",
            success: true
        });

        response.cookies.set("Token", Token, {
            httpOnly: true,
        });
        return response;

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}
