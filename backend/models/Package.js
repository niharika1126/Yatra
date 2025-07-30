import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  images: [String],
  location: { type: String },
  dateAvailable: [Date],
}, { timestamps: true });

export default mongoose.model("Package", packageSchema);
