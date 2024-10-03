import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connect from "@/dbConfig/dbconfig";

connect()

export async function POST(request) {
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
    

}