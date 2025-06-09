import express from 'express'
import process from 'process'

const app = express()

process.on('SIGINT',()=>{
    console.log('Application is being interrupted...');
    process.exit(0)
})

process.on('SIGTERM',()=>{
    console.log('Application is being terminated...');
    process.exit(0)
})

app.get('/', (req, res) => {
res.send('Express app executed by Node.js Container')
})

app.listen(3000)