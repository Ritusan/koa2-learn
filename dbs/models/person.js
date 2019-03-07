// import mongoose from 'mongoose'
const mongoose = require('mongoose')

// 先声明一个schema，相当于在数据库中新建了一个表，描述了表的字段
// 再建一个模型，需要在模型上新建一个实例
let personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// 由schema生成一个model,用模型和schema做关联
// model下的文件怎么命名：person.js是collection的名字

// model具备了跟数据库相关的行为和操作
// model既跟数据表关联，又跟schema关联，它做了一个中间的桥梁，想要最终操作数据库的，是实例去完成
// export default mongoose.model('Person',personSchema)
module.exports = mongoose.model('Person',personSchema)

// 数据库增加内容：node服务向数据库服务写数据的过程
// curl:shell命令，linux命令,发一个请求，-d代表post方式，'post中传入的数据'，post接口地址url

// curl -H "Content-Type: application/json" -X POST  --data '{"name":"lilei","age":18}' http://localhost:3000/users/addPerson
// curl -d 'name=lilei&age=27' http://localhost:3000/users/addPerson
// curl -d "name=lilei" http://localhost:3000/users/addPerson
// curl -d 'name=hanmeimei&age=17' http://localhost:3000/users/addPerson
// 如果返回code=0，说明数据成功写入数据库，然后打开可视化工具，刷新，下面有了dbs数据库
// curl -d "name=lilei" http://localhost:3000/users/getPerson
// curl -H "Content-Type: application/json" -X POST  --data '{"name":"lilei"}' http://localhost:3000/users/getPerson