import mongoose from 'mongoose'
require('dotenv').config(); // Load environment variables from .env file - located in libs flder.

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.tr5zj0y.mongodb.net/BlogsMongoDB`

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Mongo connection successful");
    } catch (error) {
        console.error("Error on connecting MongoDatabase: ", error);
    }
}

export default connectMongoDB;