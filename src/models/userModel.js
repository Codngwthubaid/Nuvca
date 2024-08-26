// Old Code
// import mongoose from 'mongoose';
// const userSchema = new mongoose.Schema({
//     username: { type: String, require: true },
//     email: { type: String, require: true, unique: true },
//     password: { type: String, select: false },
//     GoogleID: { type: String, require: true }
// })
// export const User = mongoose.models.User || mongoose.model('User', userSchema);

// New Code 
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, "Please provide a Username"],
        unique: true
    },
    email: {
        type: String,
        require: [true, "Please provide the Email"],
        unique: true
    },
    tel: {
        type: Number,
        require: [true, "Please provide the Number"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please provide the password"],
        unique: true,
    },
    isAmin: {
        type: String,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User