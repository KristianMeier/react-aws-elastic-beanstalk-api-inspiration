import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { loadRoutes } from './routes'

export const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 9000
const connectionString =
  'mongodb+srv://admin:admin@devtaminapi.xmsqbyi.mongodb.net/?retryWrites=true&w=majority'

loadRoutes(app)

mongoose.set('strictQuery', false)
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(port, () => {
      console.log(`Node API app is running on port ${port}}`)
    })
  })
  .catch((error: Error) => {
    console.log(error)
  })
