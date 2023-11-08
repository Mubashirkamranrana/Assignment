//Make an array of usernames emty and test the different statements for different users accordingly.
let usernames: string[] = [];
if (usernames.length === 0) {
    console.log("We need to find some user!.");
}else {
for (let username of usernames) {
    if (username === 'admin') { 
        console.log(`Hello admin, would you like to see status report?`);
} else{
    console.log(`Hello ${username}, thank you for logging in.`);
}
}
}export{}