import http from 'http'
import querystring from 'querystring'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs'
import { isEmpty } from 'lodash-es'

// console.log(JSON.stringify(obj, null, 2)) 防止打印[object]

// 创建服务
const server = http.createServer((req, res) => {
    // const url = req.url
    // const method = req.method

    const { url, method } = req

    const tempParam = url.split('?')
    const path = tempParam[0]
    const queryStr = tempParam[1]

    let query = querystring.parse(queryStr)

    // const arr = queryStr?.split('&') ?? ''
    // if (isEmpty(arr) !== true) {
    //     arr.forEach((item) => {
    //         const temp = item.split('=')
    //         const key = temp[0]
    //         const value = temp[1]

    //         query[key] = value
    //     })
    // }

    console.log(
        `收到请求，URL：${url}，METHOD：${method}，参数：${JSON.stringify(query)}`
    )

    if (path === '/api/create' && method === 'POST') {
        let bodyStr = ''

        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', (chunk) => {
            // chunk 即“流”的每一段数据
            bodyStr += chunk.toString()
        })

        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', () => {
            console.log('返回格式：', req.headers['content-type'])
            console.log('post请求中的数据：', JSON.parse(bodyStr))

            const result = {
                errno: 0,
                data: '创建成功'
            }

            res.writeHead(200, {
                'Content-type': 'application/json'
            })
            res.end(JSON.stringify(result))
        })
    } else if (path === '/api/list' && method === 'GET') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(
            JSON.stringify({
                errno: 0,
                data: [
                    { user: '老默', content: '这是一条留言1' },
                    { user: '小黑', content: '这是一条留言2' }
                ]
            })
        )
    } else {
        res.end('{"data":"404 Not Found"}')
    }
})

// 监听请求
server.listen(3000)
console.log('http 服务已启动，端口号：3000')

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(__filename, __dirname)

// console.log('从内存读取文件')
// try {
//     const data = await fs.readFile('C:/Users/51790/Desktop/test.txt', {
//         encoding: 'utf8'
//     })
//     console.log(data)
// } catch (err) {
//     console.log(err)
// }

// console.log('使用流读取文件')
// const readfile = fs.createReadStream('D:/书单.png')
// const writefile = fs.createWriteStream('C:/Users/51790/Desktop/test.png')

// readfile.on('data', (chunk) => {
//     writefile.write(chunk)
// })

// readfile.on('end', () => {
//     writefile.end()
// })
