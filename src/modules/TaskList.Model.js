import TicketListSchema from './TaskLists.schema.js'

export const insertTicket = (newTask) => {
  return new Promise((resolve, reject) => {
    TicketListSchema(newTask)
      .save()
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//read data from database

export const getTasks = () => {
  return new Promise((resolve, reject) => {
    TicketListSchema.find()
      .then((data) => {
        // console.log(data)
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//delete

//mark as to do

//mar as not to do
