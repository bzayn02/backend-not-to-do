import express from 'express'
const route = express.Router()
import { taskList } from '../assets/tickets.js'

route.all('/', (req, res, next) => {
  console.log('we got hit')
  next()
  // res.json({ message: 'got hit' })
})

//return all tickets
route.get('/', (req, res) => {
  console.log(taskList, '----')
  res.json(taskList)
})

//add new ticket
route.post('/', (req, res) => {
  console.log(req.body)
  // store data in the database
  res.json(req.body)
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
