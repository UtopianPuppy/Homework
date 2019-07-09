
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');
var http = require('http');
var app = http.createServer(function (req, res) {
    //设置返回内容的格式和编码
    res.setHeader('content-type','text/html;charset=utf-8');

    //把url字符串解析成对象
    var url_obj = url.parse(req.url);
    if (url_obj.pathname === '/login') {
        fs.readFile('./login.html', 'utf-8', function (err, data) {
            if (!err) {
                res.write(data);
                res.end();
            }
        })
    }
    if (url_obj.pathname === '/user_login' && req.method === 'GET') {
        //接收前台数据，验证用户名 url_obj.query

        var querystring_data = querystring.parse(url_obj.query);
        // console.log(querystring_data);
        if (querystring_data.username === 'admin' && querystring_data.password === '123456') {
            res.write('欢迎登陆！');
            res.end()
        } else {
            res.write('用户名或者密码错误，请<a href="/login">重新登录</a>');
            res.end()
        }
    }

    //接收post方法发送的数据
    if (url_obj.pathname === '/user_login' && req.method === 'POST') {
        var post_data = '';
        //要获取post方法发送过来的数据，需要监听两个事件
        //data事件：当浏览器有数据发送过来的时候就会触发
        req.on('data', function (chunk) {
            //chunk参数：表示数据块，浏览器把数据切块来分块发送
            post_data += chunk;
            // console.log(post_data);
        });
        req.on('end', function () {
            //end事件：数据接收完成后出发的事件
            var post_obj = querystring.parse(post_data);

            if (post_obj.username === 'admin' && post_obj.password === '123456') {
                res.write('欢迎登陆！');
                res.end()
            } else {
                res.write('用户名或者密码错误，请<a href="/login">重新登录</a>');
                res.end()
            }
            console.log('数据接收完成')
        });
    }

});
app.listen(3000);