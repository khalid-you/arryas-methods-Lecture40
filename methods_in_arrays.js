'use strict';

// This is how to add an element at the end
const friends = ['Khalid', 'Meshal', 'Ahmed'];
friends.push('peter');
console.log(friends);

// This is how to add an element at the begining
friends.unshift('saleh');
console.log(friends);

// This is how to remove elements
friends.pop();  // Remove the last element
const poped = friends.pop();  // Remove the last element
console.log(poped);
console.log(friends);

friends.shift();    // Remove The First Emelment
console.log(friends);

// Check if the element is in the array and return the number of it
const check = prompt('enter a name to check');
if (friends.includes(check)) {
    console.log(`${check} is one of your friend and the index of it is ${friends.indexOf(check)}`);
} else {
    console.log(`WHo's ${check} ??`);
}
