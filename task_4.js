const averange = (...grades) => grades.reduce((sum, next) => sum + next)/grades.length;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(averange(...grades));
