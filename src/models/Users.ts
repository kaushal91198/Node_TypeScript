import { Model, Schema, model } from "mongoose";

export interface UserDocument extends User {
    name: string
    dept: string
}

interface User {
    name: string
    dept: string
}

interface UserModel extends Model<User> {
    myNewStaticFN(): Number
    myNewStaticFN2(): string
}

const userSchema = new Schema<User, UserModel>({
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    }
})

userSchema.static('myNewStaticFN', function myNewStaticFN() {
    return 150
})
userSchema.static('myNewStaticFN2', function myNewStaticFN2() {
    return "150"
})

const UserModel = model<User, UserModel>('user', userSchema)

export default UserModel