import connect from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try {
        const resBody = await request.json();
        const { email, password } = resBody;
        console.log(resBody);

        // Getting User
        const userExisting = await User.findOne({ email });
        // Cross-checking of user existence
        if (!userExisting) {
            return NextResponse.json({
                message: "User not exist !!!",
                success: false
            });
        }

        // Password Compare
        const validatePassword = await bcrypt.compare(password, userExisting.password);
        if (!validatePassword) {
            return NextResponse.json({
                message: "Incorrect Password !!!",
                status: 500,
            });
        }

        // Creating Token
        const tokenData = {
            id: userExisting._id,
            email: userExisting.email,
            tel: userExisting.tel
        };

        // TokenSetting
        let Token;
        try {
            Token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "10min" });
            console.log("Generated Token:", Token);
        } catch (err) {
            console.error("Error generating token:", err);
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
        console.error(error);
        return NextResponse.json({
            message: "Login Failed !!!",
            status: 500
        });
    }
}
