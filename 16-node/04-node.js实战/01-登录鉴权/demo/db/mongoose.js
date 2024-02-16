// 封装 mongoose 连接方法
// import mongoose from 'mongoose'
const mongoose = require('mongoose')

// 配置
const dbUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'comment1'
const connectStr = `${dbUrl}/${dbName}`

const db = mongoose

// 连接数据库
async function connectDB() {
    try {
        await db.connect(connectStr)
        console.log('数据库连接成功')
    } catch (error) {
        console.log('数据库连接失败', error)
        throw error
    }
}

connectDB()

// 在应用退出时关闭数据库连接
process.on('SIGINT', async () => {
    await db.disconnect()
    console.log('数据库连接已关闭')
    process.exit()
})

// export default db
module.exports = db
