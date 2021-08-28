import express from 'express'
const route = express.Router()
import { taskList } from '../assets/tickets.js'
import { insertTicket, getTasks, getATask, deleteTasks, updateTodo } from '../modules/TaskList.Model.js'

route.all('/', (req, res, next) => {
  console.log('we got hit')
  next()
  // res.json({ message: 'got hit' })
})

//return all tickets
route.get('/:id?', async (req, res) => {

 

  try {
    const {id} = req.params
    console.log(id)
    
    if (id){
      const result=await getATask(id)
      res.json(result)
    }
    else {
      const taskLists=await getTasks()
      res.json({result:taskLists})
    }
    }
    catch (error) {
    console.log(error)
    res.json({
      message:"We are unable to process your request, contact to admin."
    })
    
  }
})

 
//add new ticket
route.post('/', async (req, res) => {
  // store data in the database
  const result = await insertTicket(req.body)

  console.log(result)
  res.json(result)
})



//update ticket
route.patch('/', async (req, res) => {
  try {
    
  if (!req.body.id){
    res.json({status:'error', message:"invalid request"})
  }
  const result = await updateTodo(req.body)
  res.json({result })
  } catch (error) {
    res.json({message:'updated'})
  }
  console.log(req.body)

})




//delete ticket
route.delete('/', async (req, res) => {
const {id} = req.body

if (!id){
  res.json({status:'error', message:"invalid request"})
}
  console.log('req.body')
  res.json({ message: 'the requested ticket will be deleted form database' })


const result =await deleteTask(id)

const msg =result ? result:{message:'Collection doesnnt exist'}
res.json(result)
})

export default route
