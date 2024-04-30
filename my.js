// a) Return the length of a given string.
document.write("<h2>a) Return the length of a given string.</br>");

let string = "Waqar";
document.write("Lenght of (Waqar) is ",string.length);


// b) Concatenate two strings together.
document.write("<h2>b) Concatenate two strings together.</br>");

let firstName = "Waqar";
let lastName = "Hussain";
let fullName = firstName + " " + lastName;
document.write(fullName);


// c) Determine if a given string is empty.
document.write("<h2>c) Determine if a given string is empty.</br>");

let str = "";
if (str.length === 0) {
    document.write("The string is empty.");
}


// d) Count the number of vowels in a string.
document.write("<h2>d) Count the number of vowels in a string.</br>");

let string2 = "Waqar";
let vc = /[aieou]/gi;
let chars = string2.match(vc);
document.write(chars.lenght);
