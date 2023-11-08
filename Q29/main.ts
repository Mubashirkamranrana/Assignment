//Make an array of usernames and test the different statements for different users accordingly.
const usernames: string[] = ['admin', 'Aiman', 'Ahmed', 'Bilal', 'Tahir', 'Gul Ahmed'];
for (let username of usernames) {
    if (username === 'admin') { 
        console.log(`Hello admin, would you like to see status report?`);
} 
    if (username === 'Gul Ahmed') {
        console.log(`Hello Gul Ahmed! you can enjoy the administrator rights in your account`);
    }
else{
    console.log(`Hello ${username}, thank you for logging in.`);
}
}