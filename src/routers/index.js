import express from 'express'
const route = express.Router()
import { taskList } from '../assets/tickets.js'
import { insertTicket, getTasks } from '../modules/TaskList.Model.js'

route.all('/', (req, res, next) => {
  console.log('we got hit')
  next()
  // res.json({ message: 'got hit' })
})

//return all tickets
route.get('/', async (req, res) => {
  const taskLists = await getTasks()
  console.log(taskLists)
  res.json({ result: taskLists })
})

//add new ticket
route.post('/', async (req, res) => {
  // store data in the database
  const result = await insertTicket(req.body)

  console.log(result)
  res.json(result)
})

//update ticket
route.patch('/', (req, res) => {
  //
  res.json({ message: 'the requested ticket will be update ticket' })
})

//delete ticket
route.delete('/', (req, res) => {
  console.log('deleting...')
  res.json({ message: 'the requested ticket will be deleted form database' })
})

export default route
