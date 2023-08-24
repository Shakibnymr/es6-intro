const max = Math.max(5,43,6,2,42,88);

const numbers = [3,4,5,2,43,54,67,87];
const arrayMax = Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax);
// use spread operator to copy
const nums = [4,5,83,7];
const nums2 = [...nums]; //copy
nums2.push(12);
console.log(nums,nums2)

// advance
const sonkha = [...nums , 87]; //add extra elements while copying
console.log(sonkha)