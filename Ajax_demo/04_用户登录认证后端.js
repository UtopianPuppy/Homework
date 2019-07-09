var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var app = http.createServer(function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    //url处理
    var url_obj = url.parse(req.url);
    if (url_obj.pathname === '/') {
        fs.readFile('./04_用户登录认证实例.html','utf-8',function (err, data) {
            if (!err) {
                res.write(data);
                res.end()
            }
        })
    }
    //验证用户名是否存在
    if (url_obj.pathname === '/getdata') {
        // console.log(url_obj.query)
        if (querystring.parse(url_obj.query).username === 'admin') {
            res.write('{"status": 1, "message": "用户名已存在"}');
            res.end()
        } else {
            res.write('{"status": 0, "message": "可以注册"}');
            res.end()
        }
    }

    if (url_obj.pathname === '/login' && req.method === 'POST') {
        var post_data = '';
        req.on('data', function (chunk) {
            post_data += chunk;
        });
        req.on('end', function () {
            var obj_post = querystring.parse(post_data);
            if (obj_post.username === 'nodeing' && obj_post.password === '123') {
                res.write('{"status": 1, "message": "登陆成功"}')
            } else {
                res.write('{"status": 0, "message": "用户名或密码错误"}')
            }
            res.end();

        })
    }

});
app.listen(3000);