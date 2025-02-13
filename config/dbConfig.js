import mongoose from 'mongoose';


export const dbConnect=async(MONGO_URI)=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('db connected');
    } catch (error) {
        console.error('db connection failed',error);
        process.exit(1);
    }
}