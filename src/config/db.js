import mongoose from 'mongoose'

const mongoClient = async () => {
  try {
    //create the connection
    console.log('connecting to mongodb...')
    const uri = 'mongodb://localhost/task_lists_a'
    const con = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    if (con) {
      console.log('mongo is connected')
    }
  } catch (error) {
    console.log(error)
  }
}

export default mongoClient

// async/await
