const router = require('koa-router')()

// 定义路径名称和路径对应的操作过程
router.get('/', async (ctx, next) => {
  global.console.log('index2')
  // 只要访问首页，就种一个cookie,cookie的名称是pvid
  // 写入cookie
  ctx.cookies.set('pvid',Math.random())
  // render：渲染页面（页面类型）
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  // 返回接口的（接口类型）
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // json类型
  ctx.body = {
    title: 'koa2 json',
    // 读cookie
    cookie: ctx.cookies.get('pvid')
  }
})

module.exports = router
