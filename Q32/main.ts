//Make an arry of number 1 to 9 and loop through the arry using if-else chain inside the loop to print the proper ordinal ending for each number. output should be 1st, 2nd, 3rd, 4th and so on up 9th

const numbers: number[] = [1,2,3,4,5,6,7,8,9];
for (const number of numbers) {
    let ordinalEnding: string;
    
    if(number === 1) {
        ordinalEnding = "st";
    }else if( number ===2) {
        ordinalEnding = "nd";
    }else if (number ===3) {
        ordinalEnding = "rd";
    }else {
        ordinalEnding = "th"
    }   

    console.log(`${number}${ordinalEnding}`);
}