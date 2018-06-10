const average = (...theArgs) => (theArgs.reduce((sum, next) => sum + next) / theArgs.length);

average(1);
average(1, 3);
average(1, 3, 6, 6);

let theArgs = [ 1 ];
let theArgs2 = [ 1, 3 ];
let theArgs3 = [ 1, 3, 6, 6 ];

console.log(average(...theArgs));
console.log(average(...theArgs2));
console.log(average(...theArgs3));
