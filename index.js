const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    const data = {username: req.params.username, hobbies: ['Football', 'Skate', 'Basketball']}
    res.render('user', data)
})

const PORT = 3000

app.listen(PORT,() => {
    console.log('Server started: http://localhost:3000')
})




// const http = require('http')
// const fs = require('fs')
//
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html; charset=utf-8',
//     })
//
//     if (req.url === '/') fs.createReadStream('templates/index.ejs').pipe(res)
//     else if (req.url === '/about') fs.createReadStream('templates/about.html').pipe(res)
//     else fs.createReadStream('templates/error.html').pipe(res)
// })
//
// const PORT = 3000
// const HOST = 'localhost'
//
// server.listen(PORT, HOST, () => {
//     console.log(`Сервер запущен: http://${HOST}:${PORT}`)
// })