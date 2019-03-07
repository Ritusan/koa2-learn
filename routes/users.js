const router = require('koa-router')()

// 引入模型
const Person = require('../dbs/models/person')

// 带有前缀的路由，用于把路由分模块写
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 新增一个接口，写入
router.post('/addPerson', async function(ctx,next){
    console.log(ctx.request.body)
    console.log(ctx.params)
    // console.log(ctx.request.body.name)
    // 给model新建一个实例
    const person = new Person({
        // 接口中需要传的字段,post对应的是request.body
        name: ctx.request.body.name,
        age : ctx.request.body.name
    })
    console.log(ctx.request.body)
    // ctx.body = ctx.request.body
    // console.log(ctx.query)
    // console.log(ctx.request)
    let code
    // 捕获错误
    try {
        // 通过save()方法做了一个增添数据的行为，save()是model中已经定义好了的
        await person.save()
        await console.log(ctx.request.body)
        // 如果没有异常
        code = 0
    } catch (error) {
        // 如果有异常
        code = -1
    }
    // 直接返回code
    ctx.body = {
        code: code
    }
})

// 读的操作
router.post('/getPerson',async function(ctx){
    const result = await Person.findOne({
        name: ctx.request.body.name
    })
    const results  = await Person.find({
        name: ctx.request.body.name
    })
    global.console.log(ctx.request)
    global.console.log(ctx.request.body)
    global.console.log(ctx.request.body.name)
    ctx.body = {
        code: 0,
        result,
        results
    }
})
module.exports = router
