let personName = 'Meekail';
console.log("Is personName == 'Burhan'? I predict False.");
console.log(personName == 'Burhan');

console.log("is personName == 'Meekail'? I predict True.");
console.log(personName == 'Meekail');

console.log("Is personName == 'Abdullah'? I predict False.");
console.log(personName == 'Abdullah');

console.log("Is personName !== 'Burhan'? I predict True.");
console.log(personName !== 'Burhan');

console.log("Is personName !== 'Arham'? I predict True.");
console.log(personName !== 'Arham');

console.log("Is personName === 'Adnan'? I predict False.");
console.log(personName === 'Adnan');

console.log("Is personName === 'Meekail'? I predict True.");
console.log(personName === 'Meekail');

//Test using the Lowercase function
let message = 'HELLO!';
console.log("is message.toLowerCase() == 'hello!'?, I predict True.");
console.log(message.toLowerCase() == 'hello!');

console.log("Is message.toLowerCase() == 'goodbye'?, I predict false.");
console.log(message.toLowerCase() == 'good');
//Test using the Uppercase Functionz
console.log("is message.toUpperCase() == 'HELLO!'?, I predict true.");
console.log(message.toUpperCase() == 'HELLO!');

//Numerical Test
let age = 29;

console.log("Is age == 29? I predict True.");
console.log(age == 29);

console.log("Is age == '39'? I predict False.");
console.log(age == 39);

console.log("Is age != 39? I predict True.");
console.log(age != 39);

console.log("Is age > 28? I predict True.");
console.log(age > 28);

console.log("Is age < 39? I predict True.");
console.log(age < 39);

console.log("Is age > 39? I predict False.");
console.log(age > 39);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 24? I predict False.");
console.log(age <= 24);

//Test using "and" and "or" operators
let x = 10
let y = 5

console.log("Is x > 8 and y < 6. I predict True.");
console.log(x > 8 && y < 6);

console.log("Is y > 10 and x < 5. I predict False.");
console.log(y > 10 && x < 5);

console.log("Is x < 12 or y > 4. I predict True.");
console.log(x < 12 || y > 4 );

//Test whether an item is in an array
const appraisal = ['A','B+', 'B', 'C'];

console.log("Is 'A' in the appriasal's array? I predict True.");
console.log(appraisal.indexOf('A') !== -1);

console.log("Is 'D' in the appriasal's array? I predict False.");
console.log(appraisal.indexOf('D') !== -1);


//Test whether an item is not in an array
console.log("Is 'D' is not in the appraisal's array? I predict True.");
console.log(appraisal.indexOf('D') !== -2);


console.log(5 !== 5);
console.log(10 !== 10);
export{}