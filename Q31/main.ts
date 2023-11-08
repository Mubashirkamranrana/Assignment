//Checking username to ensure that every user has unique username.
//Make a list of username called current_Users
//Make another list of username called new_Users
//Loop through the new_user list to see each new username has already been used. if, it has printed, you need to pick a new username. if username has not been used, print message that username is available.
//'for of; loop method:
const current_Users: string[] = ["John", "Tyrone", "conRad", "Cajetan"];
const new_Users: string[] = ["Conrad", "Sahira", "Amar", "Dean"];

for (const new_user of new_Users) {//looping through both current and new user lists to check
  //whether new username is available and not conflicted to the current username by making comparison in 'lower case'
  //in both of the list 
      const is_existing_user = current_Users.some((current_Users) =>
    current_Users.toLowerCase() === new_user.toLowerCase()
    );  
    if (is_existing_user) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}

//Alternative method by making function
// Make a list of current users
const current_users: any = ["john", "alice", "jane", "bob", "smith"];

// Make a list of new users
const new_users: any = ["joe", "Alice", "mike", "janeDoe", "sMiTh"];

// Function to check if a username exists in the current_users list
function isUsernameTaken(username: any): boolean {//The function is declared with the 
            //name isUsernameTaken. It takes one parameter username of type string, which represents
            //the username to be checked. The function returns a boolean value (true or false) to 
            //indicate whether the username exists in the current_users list.// I used 'any type in the 
            //argument as property '.includes' does not exist on the type string[].
  const lowerCaseUsername = username.toLowerCase();//In this step, we use the toLowerCase()
           //method on the username string to convert it to lowercase. This is done to make the comparison case-insensitive.
  return current_users.includes(lowerCaseUsername);
  }        //The includes() method is used on the current_users array to check if the lowerCaseUsername exists in it. 
          //The includes() method returns true if the element is found in the array; otherwise, it returns false. 
          //The function then returns this result, indicating whether the username is taken (true) or available (false) in the current_users list.

// Loop through the new_users list and check if each username is available
new_users.forEach((username) => {//The forEach method iterates through each element of the array and executes the code inside the provided 
          //callback function for each element.The forEach method takes a callback function as an argument. In this case, the callback function is 
          //defined using an arrow function syntax. The username parameter represents the current element of the new_users array that is being processed during each iteration.
  const isTaken = isUsernameTaken(username);//Inside the callback function, the code calls the isUsernameTaken function with the current username as an argument. 
          //The purpose of this function is to check if the given username already exists in the current_users list.
  if (isTaken) {
    console.log(`Sorry, the username '${username}' is already taken. Please choose a different one.`);
  } else {
    console.log(`The username '${username}' is available.`);
  }
});