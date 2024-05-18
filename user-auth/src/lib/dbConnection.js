import mongoose from 'mongoose'

let status = false;
const dbConnection = async () => {
    const dbURI = 'mongodb://localhost:27017/user-auth'
    try {
        if(status){
            console.log("mongodb is already connected..")
            return
        }
        const connection = await mongoose.connect(dbURI)
        status=true;
        
    } catch (error) {
        console.log(error.message);
        status=false;
        process.exit(1)
    }
}

export default dbConnection;