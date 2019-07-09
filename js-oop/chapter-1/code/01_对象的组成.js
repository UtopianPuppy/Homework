var arr = [];
//arr是一个数组对象 num是一个属性 表示为一个变量
arr.num = 10;
console.log(arr.num);

arr.test = function () {
    //this指向arr （谁调用this，this就指向谁）
    console.log(this.num)
};
//test就是arr对象的方法
arr.test();