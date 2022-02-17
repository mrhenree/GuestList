var guestlist = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var name = prompt("What is your name?");
if (guestlist.includes(name.slice(0,1).toUpperCase() +name.slice(1,name.count).toLowerCase())) {
   alert("Welcome " +name.slice(0,1).toUpperCase() +name.slice(1,name.count).toLowerCase() +", Do enjoy yourself!" );
} else {
 alert("Sorry " +name.slice(0,1).toUpperCase() +name.slice(1,name.count).toLowerCase() +", your name doesn't seem to be on the guestlist." );
}
