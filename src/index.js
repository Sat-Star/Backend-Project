//always use try catch while connecting to db
//always use async await for db

//kaam karega but inconsistent for our code
//require('dotenv').config({path : './.env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()






























/*
connect db method 1, using iffie
second method is making separate file for it
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
;(async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("err", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("error", error);
        throw err
    }
})()
*/