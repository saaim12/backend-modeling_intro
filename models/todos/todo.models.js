import mongoose from 'mongoose';
const todoschema = new mongoose.Schema({
content:{
  type:String,
  required:true
},
complete:{
  type:Boolean,
  default:false
},
createdBy:{
  required:true,
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"//this name should match exactly with name inside model bracket
}
//array of subtodos
subtodos:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Subtodos'
  },
]

}, { timestamps: true });

export const todo = mongoose.model('todo', todoschema);
