import connect from "@/dbConfig/dbconfig"
import User from "@/models/userModel"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

connect();

export async function POST(request) {
    try {
        const resBody = await request.json()
        const { email, password } = resBody
        console.log(resBody);

        // Getting User
        const userExisting = User.find({email})
        // Cross-checking of user existance
        if (!userExisting) {
            return NextResponse.json({
                message: "User not exist !!!",
                success: false
            })
        }

        // Password Compare
        const validatePassword = await bcrypt.compare(password,User.password)
        if (!validatePassword) {
            return NextResponse.json({
                message: "Incorrect Password !!!",
                status: 500,
            })
        }

        // Creating Token
        const tokenData = {
            id: User._id,
            email: User.email,
            tel: User.tel
        }

        // TokenSetting
        const Token = jwt.sign(tokenData,process.env.TOKEN_SERECT,{expiresIn: "10min"})
        
        // Creatinf Response
        const respone = NextResponse.json({
            message: "Successfully Login",
            success : true
        })

        respone.cookies.set("Token",Token,{
            httpOnly: true,
        })

    } catch (error) {
        return NextResponse.json({
            message: "Login Failed !!!",
            status: 500
        })
    }
}