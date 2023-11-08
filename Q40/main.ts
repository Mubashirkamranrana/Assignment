//Make an array of magicians and make a function called show_Magicians that prints each name of the magician presented in the array.
function show_Magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

//Example usage
const magicianArray: string[] = ["Ainak Wala Jin", "Aamil Junaid Bangali", "Ali Baba"];
show_Magicians(magicianArray);