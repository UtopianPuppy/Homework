//url 模块 把url字符串解析成对象
var url = require('url');
var url_str = 'http://nodeing.com/search?q=html&name=xiaoqiang';
var url_obj = url.parse(url_str);
// console.log(url_obj);

//引入querystring模块
var str = 'q=html&name=xiaoqiang';
var querystring = require('querystring');
var str_obj = querystring.parse(str);
console.log(str_obj);