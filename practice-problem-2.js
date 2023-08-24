//write an arrow function where it will do the following: 
/*
a) it will take an array where the array elements will be the name of your friends.
b) check if the length of each element is even , push elements with even length to a new array and return the result.
// */ 

const friends = ['efu', 'rakib', 'noyon', 'babu', 'axad', 'xavi'];
const realFriends = [];
function findFriends(friends){
    
        for (const friend of friends) {
           if (friend.length%2 ==0){
             realFriends.push(friend);
            //  console.log(realFriends);
           };
           
        }
    return realFriends
}

const real = findFriends(friends);
console.log(real)














 
// // const getThird = numbers => numbers[2];
// // const third = getThird([22,32,15,49]);
// // console.log(third);
// // // 
// // const friends = ['efu', 'rakib', 'noyon', 'babu', 'axad', 'xavi'];
// // const friend = for (const fr of friends) {
// //     console.log(fr)
// // }

// let realFriends = [];
// const findFriend = freinds => for (const friend of freinds) {
//     if(freind.length === 4)
//     return realFriends.push(friend)
// }
// const real = findFriend(['efu', 'rakib', 'noyon', 'babu', 'axad', 'xavi']);
// console.log(real)