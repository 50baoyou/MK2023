const router = require('koa-router')()
const User = require('../db/model')

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

// 模拟登录
router.get('/login-mock', async function (ctx, next) {
    const query = ctx.query

    if (query?.user) {
        ctx.session.userInfo = {
            username: query.user
        }
        ctx.body = '登录成功'
        console.log('登录验证成功')
    } else {
        ctx.body = '请登录' // 拦截请求
        console.log('登录验证失败')
    }
})

// 模拟验证
router.get('/login-check-mock', async function (ctx, next) {
    ctx.body = ctx.session.userInfo || '空的'
})

// 登录（连接数据库）
router.get('/login', async function (ctx, next) {
    const { username, password } = ctx.query

    const user = (await User.findOne({ username, password })) || null

    if (user) {
        ctx.session.userInfo = user
        ctx.body = '登录成功'
        console.log('登录验证成功')
    } else {
        ctx.session.userInfo = { data: '空的' }
        ctx.body = '请登录' // 拦截请求
        console.log('登录验证失败')
    }
})

module.exports = router
