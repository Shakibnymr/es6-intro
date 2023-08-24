// single parameter
const getAge = (person) => person.age;
const student = {name: 'nymr', age: 31};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([22,32,15,49]);
console.log(third);

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function. if you want to get anything returned from this function. then you have to use the return key.
const doMath = (x,y,z) => {
    const sum = x+y+x;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}