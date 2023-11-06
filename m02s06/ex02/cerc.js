console.log(process.argv);

let [, , length = 2, width = 1] = process.argv;
length = Number(length);
width = Number(width);

console.log(length * width);
