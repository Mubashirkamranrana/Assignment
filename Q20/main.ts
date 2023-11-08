//Define an interface for the object structure
interface MyObject {
    name: string;
    category: string;
    qunatity: number;
}

//Create objects using the interface
const object1: MyObject = {
    name: "Pizza",
    category: "Medium",
    qunatity: 4

};

const object2: MyObject = {
    name: "Burger",
    category: "Large",
    qunatity: 7
};

//print the objects
console.log(object1);
console.log(object2);