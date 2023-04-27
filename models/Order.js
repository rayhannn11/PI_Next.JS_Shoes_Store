import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    products: [
      {
        productId: {
          type: String,
        },
        title: { type: String },
        img: { type: String },
        size: { type: String },
        categories: { type: Array },
        price: { type: Number },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    telephone: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
    paid: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
