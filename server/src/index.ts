import express, { Express, Request, Response} from 'express'
import { env } from './env'
import morgan from 'morgan'
import cors from 'cors'

import AccountRoutes from './account/routes'


const app: Express = express()
const port = env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended:true }))

app.use("/account", AccountRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express server')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})