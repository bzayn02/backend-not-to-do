import TicketListSchema from './TaskLists.schema.js';

export const insertTicket = (newTask) => {
  return new Promise((resolve, reject) => {
    TicketListSchema(newTask)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//read data from database

export const getTasks = () => {
  return new Promise((resolve, reject) => {
    TicketListSchema.find()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//get single ticket

export const getATask = (_id) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.findById(_id)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

//delete single doc
export const deleteTasks = (ids) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.deleteMany({
      _id: {
        $in: ids,
      },
    })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

//Switch task between to do and not to do

export const updateTodo = ({ id, todo }) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.findByIdAndUpdate(
      id,
      {
        todo,
      },
      {
        new: true,
      }
    )
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

//mar as not to do
