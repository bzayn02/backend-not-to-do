import mongoose from 'mongoose';

const mongoClient = async () => {
    try {
        //create teh connection
        console.log("Connecting to Mongodb...")

        const uri ="mongodb://localhost:27017/task_list"
        const con= await mongoose.connect(uri,{})
        if(con){
            console.log('mongo is conencted ')
        }



    } catch (error) {
        console.log(error)
    }
}

export default mongoClient

// async/await