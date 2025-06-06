import express from 'express'

const app = express()

app.get('/', (req, res) => {
res.send('Express app executed by Node.js Container')
})

app.listen(3000)