const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use( express.static(__dirname) )
app.get('', (req, res) => {
    res.sendFile('./index.html')
    //console.log(__dirname + '\\index.html')
    //console.log('.\\styles\\css')
    res.end()
})

app.listen(port, () => {
    console.log('Server has been started')
})