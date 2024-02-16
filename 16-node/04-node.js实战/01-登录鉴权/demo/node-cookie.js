// 服务端操作 cookie
// import http from 'http'
const http = require('http')

const server = http.createServer((req, res) => {
    // 设置 cookie
    res.setHeader('Set-Cookie', 'cookie = this is cookie')

    // 获取 cookie
    const cookieStr = req.headers.cookie
    console.log('cookie:', cookieStr)

    // 结构化 cookie
    const cookie = {}
    cookieStr.split(';').forEach((item) => {
        const arr = item.trim().split('=')
        const key = arr[0]
        const value = arr[1]

        cookie[key] = value
    })
    console.log('cookie obj is:', cookie)

    res.end('cookie set')
})

server.listen(3333)

console.log('server run on 3333 port')
