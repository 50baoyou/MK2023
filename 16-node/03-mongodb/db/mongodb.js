// 封装 mongodb 连接方法
import { MongoClient } from 'mongodb'

// 参数
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const dbName = process.env.DB_NAME || 'comment1'
const client = new MongoClient(url)

// 重用连接
let db
// 连接数据库
async function connectDB() {
    if (!db) {
        try {
            await client.connect()
            db = client.db(dbName)

            console.log(`数据库 ${dbName} 连接成功`)
        } catch (error) {
            console.error('连接数据库时发生错误', error)
            throw error
        }
    }
    return db
}

async function getCollection(collectionName) {
    const db = await connectDB()
    return db.collection(collectionName)
}

// 在应用退出时关闭数据库连接
process.on('SIGINT', async () => {
    await client.close()
    process.exit()
})

// 获取数据集
async function getData(collectionName) {
    try {
        const collection = await getCollection(collectionName)
        const array = await collection.find().toArray()
        // throw new Error('自定义异常')
        return array
    } catch (error) {
        console.error('获取数据时发生错误', error)
        throw error // 将异常往上抛出，方便顶层调用查看异常
    }
}

// 添加数据
async function insertData(collectionName, data) {
    try {
        const collection = await getCollection(collectionName)
        const result = await collection.insertOne(data)
        return `done:${result.insertedId}`
    } catch (error) {
        console.error('插入数据时发生错误', error)
        throw error
    }
}

export { getData, insertData }
