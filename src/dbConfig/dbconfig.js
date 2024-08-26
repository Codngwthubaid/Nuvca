import mongoose from "mongoose";

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("DB connection successfully setup");
        })

        connection.on("error", (err) => {
            console.log("DB connection failed to setup" + err);
            process.exit()
        })
    } catch (error) {
        console.log("DB Connection Failed !!!");
        
    }
}

