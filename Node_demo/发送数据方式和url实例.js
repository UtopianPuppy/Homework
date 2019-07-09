//创建服务器对象
var http = require('http');
//启用fs模块 用来处理文件
var fs = require('fs');
// console.log(http);
//引入url模块解析url字符串
var url = require('url');
//实例化http对象 创建一个服务器对象
var app = http.createServer(function (req, res) { //req：请求的信息在req里 浏览器想node服务器发送的信息
                                                //res: 响应的信息放在res里 node服务器想浏览器发送的信息
    // console.log(req.method); //获取浏览器发送请求的发送方式
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // console.log(req.url);
    var url_obj = url.parse(req.url);
    console.log(url_obj.pathname);
    if (req.url === '/login') {
        //读取文件 fs模块的readfile方法可以用来读取文件内容
        fs.readFile('./login.html','utf-8',function (err, data) {
            // console.log(err); //err表示错误信息
            if (!err) {
                res.write(data);
                res.end()
            }
        })
    }
    if (url_obj.pathname === '/user_login') {
        res.write('欢迎登陆！');
        res.end();
    }
});
//监听端口
app.listen(3000);