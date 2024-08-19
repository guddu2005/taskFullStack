const { title } = require("process");

const mongoose = require("mongoose");
const { type } = require("os");


const taskSchema = new mongoose.Schema({
    title:{
        type:String ,
        required:true,
    },
    description:{
        type:String ,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
    
} , { timestamps:true})

const Task = mongoose.model("Task" , taskSchema);

module.exports ={
    Task,
}