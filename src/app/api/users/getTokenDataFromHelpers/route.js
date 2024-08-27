import { NextResponse } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/userModel";
import connect from "@/dbConfig/dbconfig";

connect()
export async function GET(request) {
    try {
        const userID = await getTokenData(request)
        const user = await User.findOne({ _id: userID }).select("-password")
        return NextResponse.json({
            message: "User Found",
            data: user
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )

    }
}