import mongoose from 'mongoose';
//a mini model
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
        
    },
    costumer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItem:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true

    },
    status:{
        type:String,
        enum:['pending','shipped','delivered'],
        default:'pending'
    }
},{timestamps:true});
export const Order=mongoose.model('Order',orderSchema)