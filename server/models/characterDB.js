import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

// Define Schema
const characterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  occupation: { type: String, required: true },
  imageUrl: { type: String, },
  items: { type: [String] },
  money: [
    {
      name: { type: String },
      amount: { type: Number },
    },
  ],
  skills: [
    {
      name: { type: String },
      amount: { type: Number },
    },
  ],
  // foriner key link to user 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

characterSchema.plugin(uniqueValidator);

// Compile Schema
const characterModel = mongoose.model("Character", characterSchema);

export default characterModel;