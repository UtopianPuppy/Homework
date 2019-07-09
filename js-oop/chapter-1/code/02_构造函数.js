//工厂方式
// function createPerson(name) {
//     var person = new Object();
//     person.name = name;
//     person.showName = function () {
//         alert(this.name)
//     };
//     return person;
// }
//
// var p1 = createPerson('小强');
// p1.showName();

//构造函数方式
function createPerson(name) {
    this.name = name;
    this.showName = function () {
        alert(this.name)
    }
}

var p1 = new createPerson('小强');
p1.showName();
