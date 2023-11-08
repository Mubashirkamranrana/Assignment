let alienColor: string = "Green";

// Version that runs the if block
if (alienColor === "Green") {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Version that runs the else block
alienColor = "Red"; // Change the alien"s color to something other than Green
if (alienColor === "Green") {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

//Version that runs the else block
alienColor = "Blue";
if (alienColor === "Green") {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}else {
    console.log("Congratulations! You just earned 20 points for shooting the alien.");
}
export{}