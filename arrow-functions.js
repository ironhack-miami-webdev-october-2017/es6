let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evens;


// ARROW functions can make code more streamlined
// 1. if the function has EXACTLY one parameter, you can omit the parentheses.
//       (x) => { return x + 1 }    becomes    x => { return x + 1 }
// 2. if the function has ONLY ONE LINE, you can omit the curly braces.
//       x => return x + 1          becomes    x => return x + 1
// 3. if the function has ONLY ONE LINE, you can omit the "return".
//       x => return x + 1          becomes    x => x + 1

evens = numbers.filter(singleNumber => singleNumber % 2 === 0);

// From the longer version:
evens = numbers.filter(function (singleNumber) {
  return singleNumber % 2 === 0;
});




// ARROW functions
// (replace anonymous functions to avoid weird "this" problems)


class Counter {
    constructor() {
        // start the inital count at 0
        this.count = 0;
    }

    countUp() {
        // 0 (correct)
        console.log(this.count);

        // Every second...
        setInterval(
          // anonymous functions USUALLY change the value of "this"
          // ("this" is no longer "myCounter", it's something else)
          () => {
              // display the old count
              // undefined (da fuq?)
              console.log('BEFORE ' + this.count);

              // increase the count
              this.count += 1;

              // then display the new count
              // NaN (undefined + 1)
              console.log('AFTER ' + this.count);

              console.log('');
          },
          1000
        );
    } // countUp()
} // class Counter


const myCounter = new Counter();
myCounter.countUp();
