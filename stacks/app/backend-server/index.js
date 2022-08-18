const express = require('express')
const app = express()
const port = 80

app.get('/api/environment', (req, res) => {
    res.send(req.header('X-Env'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!..`);
})