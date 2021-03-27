const express = require('express')
const chalk = require('chalk')
const app = express()

const port = process.env.PORT || 8080

app.use( express.static(__dirname) )
app.get('', (req, res) => {
    res.sendFile('./index.html')
    res.end()
})

app.listen(port, () => {
    console.log(`Сервер был успешно запущен. Ссылка: ${chalk.blue('localhost:8080')}`)
})