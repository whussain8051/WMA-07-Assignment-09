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
const reg = /[aieou]/gi;
let count = string2.match(reg);
document.write(count.length);


// e) Reverse a given string.
document.write("<h2>e) Reverse a given string.</br>");

let name = "Waqar";
let arr = name.split("").reverse().join("");

document.write(arr);


// f) Check if a string is a palindrome.
document.write("<h2>f) Check if a string is a palindrome.</br>");

let palindrome = "Madam";
let len = palindrome.length;
let msg = "It is a Palindrome Sting.";
for (let i = 0; i < len/2; i++) {
    if(palindrome[i] != palindrome[len - 1 - i]){
        let msg = "It is not a Palindrome Sting.";
    };
}
document.write(`${palindrome}: ${msg}`);


// g) Convert a string to uppercase.
document.write("<h2>g) Convert a string to uppercase.</br>");

let fname = "Waqar";
let UC = fname.toUpperCase();
document.write(UC);


// h) Find the first occurrence of a given character in a string.
document.write("<h2>h) Find the first occurrence of a given character in a string.</br>");

let string3 = "Waqar";
let letter = "a";
let strLength = string3.length;
let counter = 0;
for (let i = 0; i < strLength; i++) {
    if (string3[i] == letter) {
        counter++;
    }
}
document.write(`${string3} => ${letter} => ${counter}`);


// i) Replace all occurrences of a given character in a string with another character.
document.write("<h2>i) Replace all occurrences of a given character in a string with another character.</br>");

let string4 = "Mr Waqar";
let repl = string4.replace("Mr","Mirza");

document.write(`${string4} => ${repl}`);


// j) Trim leading and trailing whitespace from a string.
document.write("<h2>j) Trim leading and trailing whitespace from a string.</br>");

let string5 = "W a q a r";
let noWhiteSpace = string5.split(" ").join("");

document.write(`${string5} => ${noWhiteSpace}`);


// k) Count the number of words in a string.
document.write("<h2>k) Count the number of words in a string.</br>");

let string6 = "Mirza Waqar";
let countNum = string6.split(" ").length;

document.write(`${string6} => ${countNum}`);


// l) Check if a string contains only numeric characters.
document.write("<h2>l) Check if a string contains only numeric characters.</br>");

function OnlyNumericCharacters(str) {
    return /^\d+$/.test(str);
}

let strings1 = "12345";
let strings2 = "123abcd";

document.write(OnlyNumericCharacters(strings1)); // Output: true
document.write(OnlyNumericCharacters(strings2)); // Output: false


// m) Check if a string is a valid email address.
document.write("<h2>m) Check if a string is a valid email address.</br>");

let email = "whussain8051@gmail.com";
    let sample = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (sample.test(email)){                 
                document.write("Valid Email Address.");
            }
            else{
            document.write("Invalid Email Address");
        }


// n) Extract the domain name from a URL string.
document.write("<h2>n) Extract the domain name from a URL string.</br>");

function extractDomain(url) {
    let domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/g);
    
    // If a match is found, return the first match
    if (domain && domain.length > 0) {
        return domain[0].replace(/^https?:\/\//, '').replace(/^www\./, '');
    } else {
        return null; // Return null if no domain found
    }
}

let url = "https://www.google.com";
let domainName = extractDomain(url);
document.write(domainName);


// o) Convert a string into title case (the first letter of each word capitalized).
document.write("<h2>o) Convert a string into title case (the first letter of each word capitalized).</br>");

const capitalzie = function (sentence){

let str2 = sentence.split(" ");

for (let i = 0; i < str2.length; i++) {
    str2[i] = str2[i][0].toUpperCase() + str2[i].substring(1);
}
return str2.join(" ");
}

document.write(capitalzie("waqar hussain"));


// p) Remove all non-alphabetic characters from a string.
document.write("<h2>p) Remove all non-alphabetic characters from a string.</br>");

function removeNonAlphabeticCharacters(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

let cleanedString = removeNonAlphabeticCharacters("Waqar123, Hussain!");
document.write(cleanedString);


// q) Check if a string is a valid palindrome permutation (ignoring spaces).
document.write("<h2>q) Check if a string is a valid palindrome permutation (ignoring spaces).</br>");



// r) Check if a string is an anagram of another string.
document.write("<h2>r) Check if a string is an anagram of another string.</br>");



// s) Find the longest word in a string.
document.write("<h2>s) Find the longest word in a string.</br>");

let word = "longest word in a string.";
let wordArr = word.split(" ");
const sortArr = wordArr.sort(
    (strA, strB ) => {
        return strB.length - strA.length;
    }
)

document.write(sortArr[0]);


// t) Perform string compression by replacing repeated characters with the character followed by the count.
document.write("<h2>t) Perform string compression by replacing repeated characters with the character followed by the count.</br>");

