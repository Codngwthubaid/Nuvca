// import { User } from "@/models/userModel"
// import { hash } from "bcryptjs"
// import { redirect } from "next/navigation"
// import mongoose from "mongoose"

  // const dbConnection = async () => {
    //     "use server"
    //     try {
    //         if (mongoose.connections && mongoose.connections[0].readyState) {
    //             return User;
    //         } else {
    //             const { connection } = await mongoose.connect(
    //                 process.env.MONGO_URI,
    //                 {
    //                     dbName: "SignUpData"
    //                 }
    //             );
    //             console.log(`Connection with DB ${connection.host}`);
    //         }
    //     } catch (error) {
    //         throw new Error("Error Connection with DB !!!");
    //     }
    // };

    // const SignUp = async (formData) => {
    //     "use server"
    //     const name = formData.get("name")
    //     const email = formData.get("email")
    //     const tel = formData.get("tel")
    //     const password = formData.get("password")

    //     // Checking the fields are filled or not
    //     if (!name || !email || !tel || !password) {
    //         throw new Error("Please fill all the fields");
    //     }

    //     // Connection with DB
    //     await dbConnection()
    //     const user = await User.findOne({ email })
    //     const hashPassword = await hash(password, 10)
    //     if (user) {
    //         throw new Error("User is already exist !!!");
    //     }
    //     else {
    //         User.create({
    //             name,
    //             email,
    //             tel,
    //             password: hashPassword
    //         })
    //         redirect("/Login")
    //     }
    // }
