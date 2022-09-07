import express, { Request, Response } from 'express'
import { router } from './routes/userRoutes'
import connects from './config/config'
const app = express()
const PORT = 4011

connects()
app.use('/', router)

// app.get('/', (req: Request, res: Response) => {
//     res.json({ success: true })
// })



app.listen(PORT, (): void => {
    console.log(`Server running at http://localhost:${PORT}`)
})