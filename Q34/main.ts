//Make an array of animals having the same characterstics and print statement for each animal and print a statement at the end that Any of these animal can make a great pet.

const animals: string[] = ["Dog", "Cat", "Goat"];
for (const animal of animals) {
    console.log(`A ${animal.toLocaleLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");