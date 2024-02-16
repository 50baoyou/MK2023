const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')

// 导入路由
const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// error handler
onerror(app)

// middlewares
app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text']
    })
)
app.use(json())
app.use(logger()) // 日志格式
app.use(require('koa-static')(__dirname + '/public')) // 静态文件系统

app.use(
    views(__dirname + '/views', {
        // 服务端模板引擎
        extension: 'pug' // 模板语法（以停止更新）
    })
)

// 密钥
app.keys = ['koa2-demo']
app.use(
    session({
        // 配置 cookie
        cookie: {
            path: '/',
            httpOnly: true,
            // maxAge: 24 * 60 * 60 * 1000, //one day in ms,
            maxAge: 5 * 60 * 1000,
            overwrite: true,
            signed: true
        }
    })
)

// logger（自定义log）
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`自定义log：${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 自定义中间件（模拟登录验证）
app.use(async (ctx, next) => {
    const userInfo = ctx.session.userInfo

    if (ctx.URL.pathname === '/users/login') {
        await next()
        return
    }

    if (userInfo && userInfo.username) {
        await next()
        return
    } else {
        ctx.body = {
            errno: -1,
            message: '请登录'
        }
    }
})

// app.use(async (ctx, next) => {
//     console.log('111, 然后routers')
//     // await next()
//     console.log('111 end')
// })

// routes
/**
 * 在加了router.allowedMethods()中间件情况下，如果接口是get请求，而前端使用post请求，
 * 会返回405 Method Not Allowed ，提示方法不被允许 ，并在响应头有添加允许的请求方式；
 * 而在不加这个中间件这种情况下，则会返回 404 Not Found找不到请求地址，
 * 并且响应头没有添加允许的请求方式 。
 */
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

module.exports = app
