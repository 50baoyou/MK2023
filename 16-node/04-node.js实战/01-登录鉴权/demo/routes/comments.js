const router = require('koa-router')()

router.prefix('/api')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a comments!'
})

router.get('/list', function (ctx, next) {
    const query = ctx.query
    console.log(query)
    ctx.body = 'this is a comments list page'
})

router.post('/create', async (ctx, next) => {
    const body = ctx.request.body
    console.log(body)
    ctx.body = 'api create'
})

module.exports = router
