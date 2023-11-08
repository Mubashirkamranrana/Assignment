const guestlist: string[] = ["Imran Khan", "IMF", "Nawaz Sharif"];//created an array of the guests
console.log("We can only invite two people for the dinner.");
//Remove guests from your list one at a time until only two names remain in your list. Each time 
//you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestlist.length > 2) {//describing whereas the guestlist length is greater than two 
    console.log("Removing Guest from last of the array using pop() method");
    const removedGuest = guestlist.pop();//the one guest should be removed from the last of the array using pop method which removes
    //string from last of the array
    console.log(`Sorry ${removedGuest}, we can not invite you to the dinner.`);//printing notice to the removed guest that
    //he can not be invited to the dinner.
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.
for (const guest of guestlist) {
console.log(`Dear ${guest}, you are still invited to dinner.`);
}
console.log("\b")
guestlist.splice(0);//The code guestList.splice(0); is using the splice() method on the guestList array. 
//The splice() method is used to change the contents of an array by removing or replacing existing elements and/or 
//adding new elements.
//In this particular case, guestList.splice(0); is removing all elements from the guestList array. 
//The argument 0 represents the starting index from which elements will be removed. Since 0 is provided as the index, 
//it means that removal will start from the beginning of the array.
console.log("Guest list after removing all names:", guestlist); 

console.log("\b")
console.log("\b")
const guestList: string []= ["Gen. Asim Munir", "Lt. Gen. Fisal Naseer", "Gen. Ahmed Sharif Chaudhry"]//new guestlist for using shift and unshift method
console.log(`New Guest List: ${guestList}`);
while (guestList.length > 2) {//defining whereas the guest list length is greater than 2
    console.log("Removing Guest from first of the array using shift() method");
    const shiftGuest = guestList.shift();//new var should be used to define the guest to be removed by using shift() method 
    //shift method remove the first string of the array
    console.log(`>Sorry, ${shiftGuest}, we can not invite you to the dinner.`);
}
console.log(`Guest List after removing the guest: ${guestList}`);
console.log(guestList);
console.log("\b")

console.log("Adding new guest in the array using unshift() method:");
const unshiftGuest=  guestList.unshift("Asif Ali Zardari");//Adding Asif Ali Zardari as a new guest in the array using 
//unshift() method

console.log(`Guests invited to the dinner: ${guestList}`);
console.log(guestList);