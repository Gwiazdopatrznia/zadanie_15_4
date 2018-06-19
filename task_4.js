// const averange = (...grades) => grades.reduce((sum, next) => sum + next)/grades.length;
// const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
// console.log(averange(...grades));

console.log('task_4');
 const a = [
    { a: 1 },
    { a: 5 },
    { a: 24 },
    { a: 0 }
]
const averange = (...a) => a.reduce((b, c) => b + c.a, 0);
console.log(averange(...a));
