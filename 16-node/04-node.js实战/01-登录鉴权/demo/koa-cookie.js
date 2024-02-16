const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
    // 设置 cookie
    ctx.cookies.set('koa', 'version:2.7.0')

    // 获取 cookie
    const cookie = ctx.cookies.get('koa')
    console.log(cookie)

    ctx.body = 'cookie demo by koa2'
})

app.listen(3000)
