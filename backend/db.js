import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/paytm')


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,

})

const Users = mongoose.model("Users", userSchema)
export default Users;[
  {
    "username": "rahul_k",
    "firstName": "Rahul",
    "lastName": "Kumar",
    "password": "rahul@123"
  },
  {
    "username": "neha_s",
    "firstName": "Neha",
    "lastName": "Sharma",
    "password": "neha@123"
  },
  {
    "username": "arjun_p",
    "firstName": "Arjun",
    "lastName": "Patel",
    "password": "arjun@123"
  },
  {
    "username": "priya_m",
    "firstName": "Priya",
    "lastName": "Mehta",
    "password": "priya@123"
  },
  {
    "username": "sandeep_r",
    "firstName": "Sandeep",
    "lastName": "Reddy",
    "password": "sandeep@123"
  },
  {
    "username": "ananya_g",
    "firstName": "Ananya",
    "lastName": "Gupta",
    "password": "ananya@123"
  },
  {
    "username": "rohit_v",
    "firstName": "Rohit",
    "lastName": "Verma",
    "password": "rohit@123"
  },
  {
    "username": "kavya_i",
    "firstName": "Kavya",
    "lastName": "Iyer",
    "password": "kavya@123"
  },
  {
    "username": "aman_j",
    "firstName": "Aman",
    "lastName": "Jain",
    "password": "aman@123"
  },
  {
    "username": "pooja_b",
    "firstName": "Pooja",
    "lastName": "Bansal",
    "password": "pooja@123"
  }
]
[
  {
    "username": "rahul_k",
    "firstName": "Rahul",
    "lastName": "Kumar",
    "password": "rahul@123"
  },
  {
    "username": "neha_s",
    "firstName": "Neha",
    "lastName": "Sharma",
    "password": "neha@123"
  },
  {
    "username": "arjun_p",
    "firstName": "Arjun",
    "lastName": "Patel",
    "password": "arjun@123"
  },
  {
    "username": "priya_m",
    "firstName": "Priya",
    "lastName": "Mehta",
    "password": "priya@123"
  },
  {
    "username": "sandeep_r",
    "firstName": "Sandeep",
    "lastName": "Reddy",
    "password": "sandeep@123"
  },
  {
    "username": "ananya_g",
    "firstName": "Ananya",
    "lastName": "Gupta",
    "password": "ananya@123"
  },
  {
    "username": "rohit_v",
    "firstName": "Rohit",
    "lastName": "Verma",
    "password": "rohit@123"
  },
  {
    "username": "kavya_i",
    "firstName": "Kavya",
    "lastName": "Iyer",
    "password": "kavya@123"
  },
  {
    "username": "aman_j",
    "firstName": "Aman",
    "lastName": "Jain",
    "password": "aman@123"
  },
  {
    "username": "pooja_b",
    "firstName": "Pooja",
    "lastName": "Bansal",
    "password": "pooja@123"
  }
]
