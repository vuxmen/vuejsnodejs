import express, {Request, Response} from 'express'
import cors from 'cors'
import {routes} from './routes'

const app = express()

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3001']
}))

routes(app)

// app.get('/', (req: Request, res: Response) => {
//   res.send('hello world')
// })

app.listen(8000, () => {
  console.log('listen to port 8000')
})
