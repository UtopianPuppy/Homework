const path = require("path");
//获取当前目录的路径
console.log(__dirname);

//解析一个绝对地址
const s = path.resolve(__dirname, 'dist');
console.log("s===>", s);