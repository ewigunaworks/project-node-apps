import express from 'express'
import Router from "./routes/routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use(Router)

app.listen(port, () => {
    console.log('Running on http://localhost:', port)
})