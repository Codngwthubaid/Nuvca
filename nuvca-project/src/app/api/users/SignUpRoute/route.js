import connect from "@/dbconfig/dbconfig"
import User from "@/models/userModel"
import bcrypt from "bcryptjs"
import { NextResponse} from "next/server"
import { NextRequest } from "next/server"

connect()

export async function POST(NextRequest) {
    try {
        const reqBody = await NextRequest.json()
        const { userName, email, tel, password } = reqBody
        console.log(reqBody);

        // Check if user is exist or not
        const userChecking = await User.findOne({ email })
        if (userChecking) {
            return NextResponse.json(
                { error: "User already exist !!!" },
                { status: 400 }
            )
        }

        // Hashing Password
        const saltingProcess = await bcrypt.genSalt(10)
        const hashingProcess = await bcrypt.hash(password, saltingProcess);

        // Creating new User if not exist
        const newUser = new User({
            userName, 
            email, 
            tel, 
            password:hashingProcess
        })

        // SavingProcess of new user
        const saveUser = await newUser.save()
        console.log(saveUser);
        return NextResponse.json(
            {message: "User Successfully Saved"},
            {success: true},
            saveUser
        )

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}