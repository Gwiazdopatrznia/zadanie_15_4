const average = (...theArgs) => console.log(theArgs.reduce((sum, next) => sum + next)/theArgs.length);

average(1);
average(1, 3);
average(1, 3, 6, 6);
