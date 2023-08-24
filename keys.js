const glass = {name: 'glass', color: 'golden', price: 12, isCleaned: true};
console.log(glass);
const keys = Object.keys(glass);
// console.log(keys);
const values = Object.values(glass);
// console.log(values);

const entries = Object.entries(glass);
// console.log(entries);
//array of array, two dimensional array;
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// delete glass.isCleaned;
// console.log(glass);
const {isCleaned,...shortGlass} = glass;
console.log(shortGlass);

// freeze
Object.seal(glass);
glass.source = 'bd';
glass.price = 5000;
delete glass.name
console.log(glass)