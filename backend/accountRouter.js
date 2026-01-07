import express from 'express'
import User from "./db.js";
import mongoose from 'mongoose';
const router = express.Router()

router.get("/balance", async (req, res)=>{
    const {username} = req.body;
    const user = await User.findOne({username: username});
    if(!user){
        return res.status(400).send("User not found");
    }
   
    res.json({balance: user.balance});

})

router.post("/send", async (req,res)=>{
    const {username, tousername, amount} = req.body;
    
    const session = await mongoose.startSession()
    try{

    session.startTransaction()
    
    const user = await User.findOne({username}).session(session);
    if(!user){
        await session.abortTransaction()
        return res.status(400).send("User not found");
    }
    const touser = await User.findOne({username: tousername}).session(session);
    if(!touser){
        await session.abortTransaction();
        return  res.status(400).send("Recipient user not found");
    }


    if(user.balance < amount){
        await session.abortTransaction();
        return res.status(400).send("Insufficient balance");
    }


    await User.updateOne({_id: user._id}, {$inc: {balance: -amount}}, {session});

    await User.updateOne({_id: touser._id}, {$inc: {balance: amount}}, {session});

    await session.commitTransaction();
    

    return res.status(200).json({message: "Transfer successful"});

} catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ message: "Transaction failed", error });
} finally {
    session.endSession();
}
});



export const accountRoutes = router;