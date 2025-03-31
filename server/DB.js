import mongoose from "mongoose";

const connection=()=>{
    const connectionParams={
    };
    try {
        mongoose.connect(process.env.MONGOURL,connectionParams)
        console.log("database is connected")
    } catch (error) {
        console.log(error)
        console.log("database is not connected")
    }
}
export default connection
