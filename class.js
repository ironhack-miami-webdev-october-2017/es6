class SortedList {
  constructor() {
    // every sorted list starts with nothing inside
    this.listArray = [];

    // which means that every sorted list's length starts at 0
    this.length = 0;
  }

  add(myNumber) {
    // add the number to the array
    this.listArray.push(myNumber);

    // update the length
    this.length = this.listArray.length;

    // sort the array again
    this.listArray.sort(function (numberA, numberB) {
        // substracting works when sorting numbers
        // (doesn't work for sorting strings)
        return numberA - numberB;
    });
  }
} // class SortedList



var myList = new SortedList();

myList.add(100);
myList.add(777);
myList.add(4);
myList.add(99);

console.log( myList );
// array: [4, 99, 100, 777]
// length: 4







// OLD constructor function / prototype syntax
// ----------------------------------------------------------------

// function SortedList () {
//   // every sorted list starts with nothing inside
//   this.listArray = [];
//
//   // which means that every sorted list's length starts at 0
//   this.length = 0;
// }
//
// SortedList.prototype.add = function (myNumber) {
//   // add the number to the array
//   this.listArray.push(myNumber);
//
//   // update the length
//   this.length = this.listArray.length;
//
//   // sort the array again
//   this.listArray.sort(function (numberA, numberB) {
//       // substracting works when sorting numbers
//       // (doesn't work for sorting strings)
//       return numberA - numberB;
//   });
// };
