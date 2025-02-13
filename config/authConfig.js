import { User } from "../models/User.js";
import { hash, compare } from "bcryptjs";

User.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 8);
  }
  next();
});

User.methods.comparePassword=async function(userPassword){
  return await compare(userPassword,this.password);
};