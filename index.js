import express from 'express'
import userRouter from './routes/user.routes.js'
import postRouter from './routes/posts.routes.js'

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
