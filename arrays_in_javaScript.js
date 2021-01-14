"use strict";
/*
const friends = ['Khalid', 'Meshal', 'Ahmed'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);

console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 2]);

// This is how to change an element fram an Array
friends[2] = 'Saleh';
console.log(friends);
console.log(friends[2]);

// This is how to make Array inside other
const firstName = 'khalid'
const khalid = [firstName, 'saleh', 2021 - 2007, 'student', friends];
console.log(khalid);
console.log(khalid.length);

// This is how to use Functions inside an Array
// A note: I can use any type of Function that i want
const calcAge = function (birth_year) {
    return 2037 - birth_year;
}
const years = [1964, 1992, 1994, 2007];

/*
//What i shouldn't do
console.log(calcAge(years));
const iShouldnotDo = calcAge(years);
console.log(iShouldnotDo);
*/
// What should i do
/*
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Another way to creat an Arrays
/*
const years = new Array(1964, 1992, 1994, 2007);
console.log(years);
console.log(years[0]);
console.log(years[1]);
console.log(years.length);
*/

