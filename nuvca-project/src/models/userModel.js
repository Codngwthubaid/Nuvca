import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, select: false },
    GoogleID: { type: String, require: true }
})

export const User = mongoose.models.User || mongoose.model('User', userSchema);
