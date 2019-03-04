##  DEMO
***
### 1.启动
``` 
1.下载demo的依赖 npm install
2.请确保已经将本地的MongoDB服务启动
3.配合Studio3T可视化MongoDB数据库
4.执行npm start 启动demo监听3000端口
5.推荐使用postman模拟post请求  
```

### 2.描述
```
1. 使用Koa2 MongoDB 实现前后端基本流程
2. app.js 开启node服务 打开MongoDB连接 
3. model文件夹是各种数据表
4. controller文件夹处理业务接口所提供的的各种业务逻辑包含对数据表的CRUD
5. router文件夹定义接口API，调用controller中的对应方法