let fs = require('fs');

let co = require('co');


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

function* gen() {
    let a = yield readFile('./a.txt');
    console.log(a);
    let b = yield readFile('./b.txt');
    console.log(b);
    let c = yield readFile('./c.txt');
    console.log(c)
}

co(gen());

// let it = gen();
// console.log(it.next()); //{ value: Promise { <pending> }, done: false }

// it.next().value.then((data) => {
//     console.log(data);
//     return it.next().value
// }).then((data) => {
//     console.log(data);
//     return it.next().value
// }).then((data) => {
//     console.log(data);
// });
