import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
},
{
    timestamps: true
}
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export interface IUser extends Document {
    _id?: string
    username: string
    password: string
    createdAt?: string
    updatedAt?: string
}

export default UserModel;
