let reptiles = ['snake', 'lizard', 'alligator'];
let mammals = ['puppy', 'kitten', 'bunny'];


// take the contents of "reptiles" and "mammals"
// and spread them out inside "animals"
let animals = [...reptiles, ...mammals, 'ostrich', 'flamingo'];

// OLD version
// let animals = reptiles.concat(mammals);
// animals.push('ostrich', 'flamingo');


// copy the reptiles object
let reptilesCopy = [...reptiles];

// old version
// (what does slice do again? it's easy to forget.)
// let reptilesCopy = reptiles.slice();


// "push" with spread operator (adding to the end)
animals = [...animals, 'platypus'];

// "unshift" with spread operator (adding to the beginning)
animals = ['sloth', ...animals];


console.log(animals);
