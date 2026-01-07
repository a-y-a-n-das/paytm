import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  balance: Number
});

const Users = mongoose.model("Users", userSchema);
export default Users;
