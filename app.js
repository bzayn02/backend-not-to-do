import express from 'express'
const app = express()

const PORT = 8000

// middleware
app.use(express.urlencoded())
app.use(express.json())

// import routere
import routers from './src/routers/index.js'
// pass all the api request here

app.use('/api/v1/', routers)

app.use('/', function (req, res) {
  res.send('You reached to our Nto to do Backend Server')
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }

  console.log(`The server running at http://localhost:${PORT}`)
})
