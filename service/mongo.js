
import mongoose from "mongoose";

export async function dbConnect(){
  try{ 
    let con = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    return con;
  }catch(error){
    console.log(error)
  }
}