import * as mongodb from './db/mongodb.js'
import * as mongoose from './db/model.js'

// mongodb
// try {
//     const array = await mongodb.getData('users')
//     console.log(array)
// } catch (error) {
//     console.log('服务器异常：', error.message)
// }

// mongoose
try {
    const User = mongoose.User
    const newData = {
        username: 'xixi',
        password: '123456',
        age: 29,
        city: 'shanghai'
    }

    // const result = await User.create(newData)
    // console.log(result)

    const arr = await User.find()
    console.log(arr)

    const update = await User.findOneAndUpdate(
        {
            username: 'xika'
        },
        { age: 31 },
        { new: true } //返回更新后的结果
    )
    console.log(update)
} catch (error) {
    console.log('服务器异常：', error.message)
}
