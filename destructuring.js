const actor = {
    name: 'antor',
    age: 30,
    phone: '01342344529',
    money: 4343461
}
// if right is an object left side of destructuring will be objects as well;
// use property name as a variable that contains the property value
const{phone,age: boyos} = actor

console.log(phone,boyos)

//  array destructuring
const numbers = [45,76]
const [first, second] = numbers;
const [x,y] = [12,66];
//
function doubleThem (a,b) {
    return [a*2, b*2];
}
const [prothom, dithiyo] = doubleThem(4,7);
console.log(prothom, dithiyo);