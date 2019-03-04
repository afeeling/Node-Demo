const Koa = require('koa')
const app = new Koa()
const koaBodyParser = require('koa-bodyparser') //该中间件用来获取post请求的参数
const Router = require('./router/index');
const config = require('./config');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.use(koaBodyParser());
app.use(Router());
app.listen(3000)