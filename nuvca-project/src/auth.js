import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import { User } from "./models/userModel";
import { compare } from "bcryptjs"
import dbConnection from "./app/SignUp/page"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                number: { label: "number", type: "tel" },
                password: { label: "password", type: "password" }
            },
            // authorize: async ({ username, password ,number}) => {
            authorize: async (credentials) => {
                // console.log(username, password , number);

                const email = credentials.email;
                const password = credentials.password
                const parsedNumber = parseInt(number, 10);

                // Cross-Checking Number - for login
                // if (isNaN(parsedNumber)) {
                //     throw new CredentialsSignin("Invalid number entry !!!");
                // }

                // Cross-Checking Username
                if (!email || !password || !parsedNumber) {
                    throw new CredentialsSignin("Username doesn't match !!!");
                }

                // for login
                // const user = { email, number: parsedNumber, id: "dfd" }

                // for sign up - setting connection form DB 
                await dbConnection()
                const user = await User.findOne({ email }).select("+password")
                if (!user) {
                    throw new CredentialsSignin("Invalid Email and Password")
                }
                if (!user.password) {
                    throw new CredentialsSignin("Invalid Email and Password")
                }

                const isMatch = compare(password, user.password)
                if (!isMatch) {
                    throw new CredentialsSignin("Invalid Email and Password")
                }

                // Cross-Checking Password
                // if (password !== "password") {
                //     throw new CredentialsSignin("Password doesn't match !!!");
                // }
                // else {
                //     return user
                // }
                else {
                    return { name: user.name, email: user.email, id: user.id }
                }
            }

        }),
    ],
    pages: {
        signIn: "/Login",
    }
});
