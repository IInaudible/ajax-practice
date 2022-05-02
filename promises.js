b = 2 + 5;
c = 17 - 9;

const example = new Promise ((res, rej) => {
    if (b === 7) {
        res ('SUCCESS')
    } else {
        rej ('ERROR')
    }
})

const process = new Promise ((res, rej) => {
    if (c === 3) {
        res ('SUCCESS 2')
    } else {
        rej ('ERROR 2')
    }
})

Promise.all([
    example,
    process
]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.error(message);
})