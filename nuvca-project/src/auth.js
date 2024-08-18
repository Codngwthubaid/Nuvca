import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "name" },
                number: { label: "number", type: "tel" },
                password: { label: "password", type: "password" }
            },
            authorize: async ({ username, password ,number}) => {
                console.log(username, password , number);

                const parsedNumber = parseInt(number, 10);

                // Cross-Checking Number
                if (isNaN(parsedNumber)) {
                    throw new CredentialsSignin("Invalid number entry !!!");
                }

                // Cross-Checking Username
                if (typeof username !== "string") {
                    throw new CredentialsSignin("Username doesn't match !!!");
                }

                const user = { username, number: parsedNumber, id: "dfd" }

                // Cross-Checking Password
                if (password !== "password") {
                    throw new CredentialsSignin("Password doesn't match !!!");
                }
                else {
                    return user
                }
            }

        }),
    ],
});
