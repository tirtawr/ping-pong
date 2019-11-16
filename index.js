const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('home'))
app.get('/ping', (req, res) => res.send('pong'))

app.listen(port, () => console.log(`ping-pong listening on port ${port}`))