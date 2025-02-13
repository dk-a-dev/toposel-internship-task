import express from 'express';
import { config } from 'dotenv';
import {dbConnect} from './config/dbConfig.js';

const app=express();

config();

const PORT=process.env.PORT || 8000;

await dbConnect(process.env.MONGO_URI);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});