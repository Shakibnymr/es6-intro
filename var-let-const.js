// var: no reason to use var anymore except exceptional
// let: allow it to reassign
// const: do not allow it to reassign
const money =25;
// money = 50; can not reset but reuse
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count);

const numbers = [23,4,23,12,56];
numbers[1] = 55;
numbers.push(4,4,4);
console.log(numbers);

// object 
let student = {
    name: ' morna',
    class: 12
}

student.name =  'kokil';
console.log(student)

// loop
let sum = 0;
for(let i = 0; i<10; i++){
    const num = i;
sum = sum + num ;
}
console.log(sum)