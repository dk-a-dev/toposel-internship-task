import express from 'express';
import { config } from 'dotenv';
import {dbConnect} from './config/dbConfig.js';
import userRoutes from './routes/userRoutes.js';

const app=express();

config();

const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use('/api/v1/users',userRoutes);

await dbConnect(process.env.MONGO_URI);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});