import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'mongoose-bcrypt'

//define Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, unique: true },
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, bcrypt: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  roles: { type: [String], required: true }
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(bcrypt);

//compile Schema
const userModel = mongoose.model("User", userSchema);

export default userModel