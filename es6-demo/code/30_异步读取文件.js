let fs = require('fs');

let co = require('co');

// fs.readFile('./a.txt', (err, data) => {
//     console.log(data.toString())
// });
//
// fs.readFile('./b.txt', (err, data) => {
//     console.log(data.toString())
// });
//
// fs.readFile('./c.txt', (err, data) => {
//     console.log(data.toString())
// });


function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString());
            }
            // console.log(data.toString())
        });
    })
}

//解决方案1 Promise()
// readFile('./a.txt').then((data) => {
//     console.log(data);
//     return readFile('./b.txt')
// }).then((data) => {
//     console.log(data);
//     return readFile('./c.txt')
// }).then((data) => {
//     console.log(data);
// });

//解决方案2 generator
function* gen() {
    yield readFile('./a.txt');
    yield readFile('./b.txt');
    yield readFile('./c.txt');
}

let it = gen();
// console.log(it.next()); //{ value: Promise { <pending> }, done: false }

it.next().value.then((data) => {
    console.log(data);
    return it.next().value
}).then((data) => {
    console.log(data);
    return it.next().value
}).then((data) => {
    console.log(data);
});
