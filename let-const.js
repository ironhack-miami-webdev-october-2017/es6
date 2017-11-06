// const = BLOCK scoped variables

const myObject = {};

// WORKS
// (const only prevents re-assignment of the WHOLE variable)
myObject.name = 'Nizar';
myObject.age = 31;


// DOESN'T WORK
// (you can't re-assign the whole const variable)
myObject = { name: 'Dapper Dan' };



// default tip 15%
const defaultTip = 0.15;


// DOESN'T WORK
// (you can't re-assign a const variable)
defaultTip = 0.30;
// TypeError: Assignment to constant variable.





// let = BLOCK scoped variables
// (only exists within the curly braces)

for (let j = 1; j <= 30; j++){
  console.log("Iteration number (j): " + j);
}

console.log("After the loop j =", j);
// ReferenceError: j is not defined



// var = FUNCTION scoped variables
// (only exists within the FUNCTION)
for (var i = 1; i <= 30; i++){
  console.log("Iteration number (i): " + i);
}

console.log("After the loop i =", i);
// 31
