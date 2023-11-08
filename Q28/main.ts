//Make an array of your 3 favorite fruits and write statements to check whether the fruit is an array or not
const favorite_fruits: any = ["mango", "banana", "apricot"];

//I used type "any" instead of string because the .include() method is not exist on
//type string[]. Even after setting target: "es2016" or later and lib: ["es2016", "es2016.Arrat.Includes", "dom"]
//Using Nested if with .indexof() method

if(favorite_fruits.indexOf("apple") >= 0) {
    console.log("I really like apples.");
}
if(favorite_fruits.indexOf("orange") >= 0) {
    console.log("I really like orange.");
}
if(favorite_fruits.indexOf("mango") >= 0) {
    console.log("I really like mango.");
}
if(favorite_fruits.indexOf("kiwi") >= 0) {
    console.log("I really like kiwi.");
}
if(favorite_fruits.indexOf("apricot") >= 0) {
    console.log("I really like apricot.");
}
if(favorite_fruits.indexOf("banana") >= 0) {
    console.log("I really like banana.");
}

//Using nested if with .includes() method
if (favorite_fruits.includes("banana")){
    console.log("You really like banana.");
}
if (favorite_fruits.includes("orange")){
    console.log("You really like orange.");
}
if (favorite_fruits.includes("mango")){
    console.log("You really like mango.");
}
if(favorite_fruits.includes("apricot")){
    console.log("You really like apricot.");
}
if (favorite_fruits.includes("strawberry")){
    console.log("You really like strawberry");
}