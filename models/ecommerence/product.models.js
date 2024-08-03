import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    //now we want that every product belongs to some specific category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    //also want to define the ownership of the product
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
  },
  { timestamps: true }
);
export const Product=mongoose.model('Product',productSchema)
