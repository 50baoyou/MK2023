import * as http from 'http'
// const http = require('http')
const a = undefined
const server = http.createServer((req, res) => {
    const url = req.url
    const path = url.split('?')[0]
    res.end(path)
})

server.listen(3000)

console.log('服务已启动，端口号：3000')
