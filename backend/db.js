import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/paytm')


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,

})

const Users = mongoose.model("Users", userSchema)
export default Users;