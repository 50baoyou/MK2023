import mongoose from './mongoose.js'

// 定义 Schema
const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true // 唯一值
        },
        password: String,
        age: Number,
        city: String
    },
    {
        // 自动添加时间戳
        timestamps: true
    }
)

// 定义 Model
const User = mongoose.model('users', UserSchema)

export { User }
