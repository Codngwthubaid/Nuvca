import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connect from "@/dbConfig/dbconfig";

connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { Token } = reqBody
        console.log(Token);

        const user = User.findOne(
            {
                verifyToken: Token,
                verifyTokenExpiry: { $gt: Date.now() }
            })

        if (!user) {
            return NextResponse.json(
                { error: "Invalid Token" },
                { status: 400 }
            )
        }
        console.log(user);

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save()

        return NextResponse.json(
            {
                message: "Email is successfully Verified",
                success: true
            }
        )

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }

}