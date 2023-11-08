//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alienColor: String = "Green";
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alienColor === "Green") {
    console.log("Congratulations! you just earned 5 points");
}
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alienColor = "Red"
if (alienColor === "Green") {
    console.log("This version will not have any output.");       
}