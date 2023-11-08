//Seeing the world: Think of atleast five places in the world
//1. Declare an arry to store the locations:
const locations: string [] = ["Ormara", "Moola Chotok", "Ornach Valley", "Ziarat", "ChaparRift"];
//2. Print the array in its original order
console.log("Original Order:", locations);
//3. Create a copy of that array and sort it in alphabetical order
const sortedAlphabetically = [...locations].sort();
console.log("Alphabetical Order:", sortedAlphabetically);
//4. Show the array is still in its original order
console.log("Original Order:", locations);
//5. Create a copy of that array and rearrange in reverse alphabetical order
const sortedReverse = [...locations].sort().reverse();  
console.log("Reverse Alphabetical Order:", sortedReverse);
//6. Show the arry is still in its original order
console.log("Orignial Order:", locations);
//7. Reverse the order of the original array
locations.reverse();
console.log("Reversed Order:", locations);
//8. Reverse the order of orginal array again to restore to its orginal order
locations.reverse();
console.log("Orignal Order:", locations);
//9. Sort the arry to store it in alphabetic order
locations.sort();
console.log("Alphabetic Order:", locations);
//10. Sort the array to store it in reverse alphabetical order
locations.sort().reverse();
console.log("Reverse alphabetic order:", locations);
    