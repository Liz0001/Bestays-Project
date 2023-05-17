import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import bcrypt from 'bcrypt';
const saltrounds = 10;

const userSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        unique: true,
        minLenght: 10,
        required: true,
        lowercase: true,
    },
    email_confirmed: { type: Boolean, default: false },
    profile_picture: { type: String },
    birthday: { type: Date },
    password: { type: String, required: true },
    created_at: { type: Date, default: new Date(), required: true },
    updated_at: { type: Date },
    role: {
        type: String,
        enum: ['user', 'admin', 'super-admin'],
        default: 'user',
        required: true,
    },
});

const User = model('User', userSchema);
export default User;
