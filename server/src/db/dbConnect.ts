import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
const uri: string = process.env.ATLAS_URI || '';

async function dbConnect() {
    await mongoose
        .connect(uri, {
            dbName: 'BestaysDB',
        })
        .then(() => {
            console.log('Connected to the database!');
        })
        .catch((error) => {
            console.log('Unable to connect to the database!');
            console.log(error);
        });
}

export default dbConnect;
