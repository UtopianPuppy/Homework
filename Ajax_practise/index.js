var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
//引入cookie
var cookie = require("cookie");
//引入数据库
var mysql = require('mysql');
//创建连接得到一个对象
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'ajax_demo'
});
//连接数据库
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


var app = http.createServer(function (req, res) {
    // res.setHeader('content-type', 'text/html;charset=utf-8');
    //需求： 用户访问 '/' 返回index.html 用户访问 '/login-bak.html' 返回login.html

    var url_obj = url.parse(req.url);
    if (url_obj.pathname === '/') {
        render('./template/index.html', res);
        return;
    }

    //处理注册功能罗辑
    if (url_obj.pathname === '/register' && req.method.toLowerCase() === 'post') {
        //接收前台数据
        var user_info = '';
        req.on('data', function (chunk) {
            user_info += chunk;
        });
        req.on('end', function (err) {
            if (!err) {
                // console.log(user_info);
                var user_obj = querystring.parse(user_info);
                if (user_obj.username === '' || user_obj.password === '') {
                    res.write('{"status":1, "message":"用户名与密码不能为空"}', 'utf-8');
                    res.end();
                    return;
                }
                if (user_obj.password !== user_obj.repassword) {
                    res.write('{"status":1, "message":"两次输入密码不一致"}', 'utf-8');
                    res.end();
                }

                //把信息写入数据库
                var sql = 'INSERT INTO admin(username, password) VALUE("' + user_obj.username + '", "' + user_obj.password + '")';
                connection.query(sql, function (error, result) {
                    // console.log("error", error);
                    // console.log("result", result)
                    if (!error && result && result.length !== 0) {
                        res.write('{"status":0, "message":"注册成功"}', 'utf-8');
                        res.end();
                    }
                })
            }
        });
        // res.write('{"name":"hello world"}');
        // res.end();
        return;
    }
    //处理登录罗辑
    if (url_obj.pathname === '/login' && req.method.toLowerCase() === 'post') {
        var user_info = '';
        res.setHeader('content-type','text/html;charset=utf-8');
        req.on('data', function (chunk) {
            user_info += chunk;
        });
        req.on('end', function (err) {
            if (!err) {
                var user_obj = querystring.parse(user_info);
                var sql = 'SELECT * FROM admin WHERE username="'+user_obj.username+'" AND password="'+user_obj.password+'"';
                //把username和password拿到数据库中和已有的数据进行比对
                connection.query(sql, function (error, result) {
                    if (!error && result && result.length !== 0) {
                        //在返回成功信息的时候需要设置一个cookie 带回浏览器
                        res.setHeader('Set-cookie', cookie.serialize('isLogin', 'true'));
                        res.write('{"status":0, "message":"登陆成功"}', 'utf-8');
                        res.end();
                    } else {
                        res.write('{"status":1, "message":"用户名或密码错误"}', 'utf-8');
                        res.end()
                    }
                });
            }
        });
        return;
    }
    //返回表格数据
    if (url_obj.pathname === '/list' && req.method.toLowerCase() === 'get') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        // console.log('1111')
        //查询数据库 把所有数据都查询出来
        var sql = 'SELECT * FROM user';
        connection.query(sql, function (error, result) {
            // console.log(result)
            if (!error && result) {
                var arrstr = JSON.stringify(result);
                // console.log(arrstr);
                res.write('{"status":0, "data":'+arrstr+'}', 'utf-8');
                res.end()
            }
        });
        return;
    }
    //添加用户
    if (url_obj.pathname === '/addUser' && req.method.toLowerCase() === 'post') {
        var user_info = '';
        req.on('data', function (chunk) {
            user_info += chunk;
        });
        req.on('end', function (err) {
            if (!err) {
                var user_obj = querystring.parse(user_info);
                var sql = 'INSERT INTO user VALUE('+null+',"'+user_obj.username+'", "'+user_obj.email+'", "'+user_obj.phone+'", "'+user_obj.qq+'")';
                // console.log(sql)
                connection.query(sql, function (error, result) {
                    if (!error && result && result.length !== 0) {
                        res.write('{"status":0, "message":"用户添加成功"}', 'utf-8');
                        res.end();
                    } else {
                        res.write('{"status":1, "message":"用户添加失败"}', 'utf-8');
                        res.end();
                    }
                })
            }
        });
        return;
    }
    //编辑用户信息
    if (url_obj.pathname === '/update' && req.method.toLowerCase() === 'post') {
        var user_info = '';
        req.on('data', function (chunk) {
            user_info += chunk;
        });
        req.on('end', function (err) {
           if (!err) {
               var user_obj = querystring.parse(user_info);
               // console.log(user_obj)
               var sql = 'UPDATE user SET username="'+user_obj.username+'", email="'+user_obj.email+'", ' +
                   'phone="'+user_obj.phone+'", qq="'+user_obj.qq+'" WHERE id='+Number(user_obj.id)+'';
               connection.query(sql, function (error, result) {
                   res.setHeader('content-type', 'text/html;charset=utf-8');
                   if (!error && result && result.length !== 0) {
                       res.write('{"status":0, "message":"用户编辑成功"}', 'utf-8');
                       res.end();
                   } else {
                       res.write('{"status":1, "message":"用户编辑失败"}', 'utf-8');
                       res.end();
                   }
               })
           }
        });

        return;
    }
    //删除用户
    if (url_obj.pathname === '/delete' && req.method.toLowerCase() === 'post') {
        var user_info = '';
        req.on('data', function (chunk) {
            user_info += chunk;
        });
        req.on('end', function (err) {
            if (!err) {
                var user_obj = querystring.parse(user_info);
                var sql = 'DELETE FROM user WHERE id='+user_obj.id;

                connection.query(sql, function (err, result) {
                    res.setHeader('content-type', 'text/html;charset=utf-8');
                    if (!err && result && result.length !==0) {
                        res.write('{"status":0, "message":"用户删除成功"}', 'utf-8');
                        res.end();
                    } else {
                        res.write('{"status":1, "message":"用户删除失败"}', 'utf-8');
                        res.end();
                    }
                })
            }
        })
    }
    //cookie验证
    if (url_obj.pathname === '/admin.html') {
        if (cookie.parse(req.headers.cookie || '').isLogin === 'true') {
            render('./template/admin.html', res);
        } else {
            render('./template/error.html', res)
        }
        return
    }
    //退出登录操作
    if (url_obj.pathname === '/logout') {
        res.setHeader('Set-cookie', cookie.serialize('isLogin', ''));
        render('./template/login.html', res);
        return
    }

    render('./template' + url_obj.pathname, res);
});
app.listen(3000, function (err) {
    if (!err) {
        console.log('listening on 3000...')
    }
});

//函数封装

function render(path, res) {
    fs.readFile(path, 'binary', function (err, data) {
        if (!err) {
            res.write(data, 'binary');
            res.end()
        }
    })
}