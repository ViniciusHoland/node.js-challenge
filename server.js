import express from 'express';
import transactionRouter from './routes/transactionsRouter.js'


const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3020 

app.use('/', transactionRouter)


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})