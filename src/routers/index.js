import express from 'express';
const route = express.Router();
import { taskList } from '../assets/tickets.js';
import {
  insertTicket,
  getTasks,
  getATask,
  deleteTasks,
  updateTodo,
} from '../modules/TaskList.Model.js';

route.all('/', (req, res, next) => {
  console.log('we got hit');
  next();
  // res.json({ message: 'got hit' })
});

//return all tickets
route.get('/:id?', async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const result = await getATask(id);
      res.json(result);
    } else {
      const taskLists = await getTasks();
      res.json({ result: taskLists });
    }
  } catch (error) {
    console.log(error);
    res.json({
      message: 'We are unable to process your request, contact to admin.',
    });
  }
});

//add new ticket
route.post('/', async (req, res) => {
  // store data in the database
  try {
    const result = await insertTicket(req.body);
    res.json(result);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

//update ticket
route.patch('/', async (req, res) => {
  try {
    if (!req.body.id) {
      res.json({ status: 'error', message: 'invalid request' });
    }
    const result = await updateTodo(req.body);
    const msg = result ? 'Data updated' : 'Nothing to update';

    res.json({ result, msg });
  } catch (error) {
    res.json({
      status: 'error',
      message: 'Unable to update',
    });
  }
});

//delete ticket
route.delete('/', async (req, res) => {
  const { ids } = req.body;

  if (!ids) {
    return res.json({ status: 'error', message: 'invalid request' });
  }

  const result = await deleteTasks(ids);

  const msg = result ? result : { message: 'Collection doesnnt exist' };
  res.json(msg);
});

export default route;
