const Router = require('koa-router')
const path = require('path')
const router = new Router()

const mongoose = require('mongoose');

const UserInfoController = require('../controller/user_info')

// 这里是注册接口  控制器方法 不需要传递ctx 项目会自动将ctx到传递到路由的控制器方法中
router.post('/register', UserInfoController.signUp)

//这里是登录接口
router.post('/login', UserInfoController.signIn)


module.exports = router