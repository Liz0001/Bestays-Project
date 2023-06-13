import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            auto: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
            select: false,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        emailConfirmed: {
            type: Boolean,
            default: false,
            select: false,
        },
        profilePicture: {
            type: String,
            enum: [
                'default',
                'option1',
                'option2',
                'option3',
                'option4',
                'option5',
            ],
            default: 'default',
        },
        birthday: {
            type: Date,
            default: Date.now,
        },
        colorTheme: {
            type: String,
            enum: ['light', 'dark'],
            default: 'light',
        },
        timeZone: {
            type: String,
            required: true,
        },
        role: {
            type: [String],
            enum: ['user', 'admin', 'super-admin'],
            default: ['user'],
            required: true,
        },
    },
    { timestamps: true }
);

// TODO: get user by ID etc

// TODO: Change Password

async function getUserByEmail(email: String) {
    const user = await User.findOne({ email: email });
    return user;
}

async function createNewUser(
    name: string,
    email: string,
    password: string,
    timeZone: string
) {
    const user = new User({
        name,
        email,
        password,
        timeZone,
    });
    const newUser = await user.save();
    return newUser;
}

async function getUserPasswordForLogin(email: string) {
    const userPass = await User.findOne({ email }).select('password');
    if (!userPass) return '';
    else return userPass.password;
}

const User = mongoose.model('User', userSchema);
export { User, getUserByEmail, createNewUser, getUserPasswordForLogin };
