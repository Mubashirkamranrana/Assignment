//if-else chain method for determination of person's age. Setting 'age' is variable.
let age: number = 70;

//person less than 2 years, print message the person is baby. using age = 1
if(age < 2)  {
    console.log("The person is baby");
    //person less than 4 years, print message the person is toddler. using age = 3
} else if (age >= 2 && age < 4) {
    console.log("The person is toddler");
    //person less than 13 years, print message the person is kid. using age = 12
} else if (age >= 4 && age < 13) {
    console.log("The person is kid.");
    //person less than 20 years, print message the person is baby. using age = 19
} else if(age >= 13 && age < 20) {
    console.log("The person is a teenager.");
    //person less than 65 years, print message the person is baby. using age = 64
} else if(age >= 20 && age < 65) {
    console.log("The person is an adult.");
    //person is of 65 or older years, print message the person is baby. using age = 65 and greater
} else{
    console.log("The person is an elder.");
}
