import express from 'express'
import {userRoutes} from './userRouter.js'
import {accountRoutes} from './accountRouter.js'
import cors from 'cors'
const app = express();
app.use(cors())


app.use(cors())
app.use(express.json());
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/account", accountRoutes)

app.listen((3000), ()=>{console.log("server is running at port 3000")})