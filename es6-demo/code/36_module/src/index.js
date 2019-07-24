//1 webpack webpack-cli 模块化打包工具
//2 babel 把es6转换成es5代码

//模块化 一个文件就是一个模块

//1 导入代码
// import {A} from './module1.js'
//
// console.log(A);

//2 导入函数
// import {fn} from './module1'
//
// fn();

//3 导入类
// import {Hello} from "./module1";
//
// let h = new Hello();
// h.fn();

//批量导入
// import * as nd from './module1'
//
// console.log(nd.A);

import b from './module1'

console.log(b)