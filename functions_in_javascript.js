"use strict";
/*
// Function declaration
function calcAge1(birth_year) {
    return 2037 - birth_year;
}
const age1 = calcAge1(2007);
console.log(age1)

// Function expression
const calcAge2 = function (birth_year) {
    return 2037 - birth_year;
}
const age2 = calcAge2(2007);
console.log(age1, age2);


// Arrow function
const calcAge3 = birth_year => 2037 - birth_year;
const age3 = calcAge3(2007);
console.log(age3);

const years_until_retirement = (birth_year, fist_name) => {
    const age = 2037 - birth_year;
    const retirement = 65 - age;
    return `${fist_name} retiers in ${retirement}`
    //return retirement;
}
console.log(years_until_retirement(2007, 'khalid'));
console.log(years_until_retirement(1992, 'Meshal'));
console.log(years_until_retirement(1994, 'Amna'));
*/

// Functions calling other Functions

/*
function cut_fruit_pices(fruit) {
    return fruit * 4
}

function fruitProcssor(apples, oranges) {
    const apple_pieces = cut_fruit_pices(apples);
    const orange_pieces = cut_fruit_pices(oranges);
    const juice = `Juice with ${apple_pieces} pieces of apple and ${orange_pieces} pieces of orange.`
    return juice;
}

console.log(fruitProcssor(2, 3));
*/


// another example of Functions calling other Functions
/*
const calcAge = function (birth_year) {
    return 2037 - birth_year;
}

const years_until_retirement = function (birth_year, first_name) {
    const age = calcAge(birth_year);
    const retirement = 65 - age;
    const already_retirement = age - 65;
    if (retirement > 0) {
        return `${first_name} retiers in ${retirement} years`;
    } else {
        return `${first_name} has already retiered for ${already_retirement} years😭`;
    }
}
console.log(years_until_retirement(2007, 'Khalid'));
console.log(years_until_retirement(1970, 'Ahmed'));
*/