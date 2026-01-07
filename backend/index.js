import express from 'express'
import {userRoutes} from './userRouter.js'
import {accountRoutes} from './accountRouter.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import mongoose from "mongoose";


async function mongooseConnect() {
  try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database successfully");
    
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}


const app = express();
app.use(cors())


app.use(express.json());
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/account", accountRoutes)

console.log("Attempting to connect to database...");    
mongooseConnect().then(()=>{
app.listen((process.env.PORT), ()=>{console.log(`server is running at port ${process.env.PORT}`)})
}).catch((err)=>{console.log('Database connection failed', err); process.exit(1)})