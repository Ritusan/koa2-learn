// ctx：进入app中会有一个对象，这个对象会挂载着所有的信息，信息包括两方面：request和response,是全局的对象，在整个app中是能拿到的
function pv(ctx){
    // path：表明当前的页面路径
    global.console.log('pv',ctx.path)
}
module.exports = function(){
    return async function(ctx,next){
        pv(ctx)
        // 当前中间件处理完毕，请交给下一个中间件处理
        await next()
    } 
}