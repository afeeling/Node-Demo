const User = require('../model/user');


module.exports = {
    async signUp(ctx) {

        let result = {
            success: false,
            message: '注册失败'
        };
        const {
            username,
            password,
        } = ctx.request.body;

        if (!username && !password) {
            result.message = '请填写用户名和密码';
            ctx.body = result;
        } else {
            let user = await User.findOne({
                username
            });
            //检查用户名是否已存在
            if (!user) {
                const newUser = new User({
                    username,
                    password,
                });

                const res = await newUser.save();
                if (!res.errors) {
                    ctx.body = {
                        success: true,
                        message: '注册成功'
                    }
                } else {
                    ctx.body = result;
                }
            } else {
                ctx.body = {
                    success: false,
                    message: '用户名已存在'
                };
            }
        }
    },

    async signIn(ctx) {
        let result = {
            success: false,
            message: '用户不存在'
        };
        //从请求体中获得参数
        const {
            username,
            password
        } = ctx.request.body;
        //检查数据库中是否存在该用户名
        await User.findOne({
            username
        }, (err, user) => {
            if (err) {
                throw err;
            }
            if (!user) {
                ctx.body = result;
            } else {
                //判断密码是否正确
                if (password === user.password) {
                    ctx.body = {
                        success: true,
                        message: '登入成功'
                    }
                } else {
                    ctx.body = {
                        success: false,
                        message: '密码错误'
                    }
                }
            }
        })
    }
}