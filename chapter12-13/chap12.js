// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, a capital letter or a small letter.
let char=prompt("Enter a character (number or string)");
document.writeln("<h1>Character Analysis</h1><br> You entered: " + char + "<br><br>");
if(char>='0' && char<='9'){
    document.writeln("<h1>The character " + char + " is a number.</h1>");
}
else if(char>='A' && char<='Z'){
    document.writeln("<h1>The character " + char + " is a capital letter.</h1>");
}
else if(char>='a' && char<='z'){
    document.writeln("<h1>The character " + char + " is a small letter.</h1>");
}
else{
    document.writeln("<h1>The character " + char + " is neither a number nor a letter.</h1>");
}

// 2. Write a program that takes two integers in variables & displays the larger number in the browser.
let num1=+prompt("Enter first integer");
let num2=+prompt("Enter second integer");
document.writeln("<h1>Comparing Two Numbers</h1>");
document.writeln("First number: " + num1 + "<br>");
document.writeln("Second number: " + num2 + "<br>");
if(num1>num2){
    document.writeln("<h1>The larger number is " + num1 + "</h1>");
}
else if(num2>num1){
    document.writeln("<h1>The larger number is " + num2 + "</h1>");
}
else{
    document.writeln("<h1>Both numbers are equal.</h1>");
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
let number=+prompt("Enter a number");
document.writeln("<h1>Number Analysis</h1><br> You entered: " + number + "<br><br>");
if(number>0){
    document.writeln("<h1>The number " + number + " is positive.</h1>");
}
else if(number<0){
    document.writeln("<h1>The number " + number + " is negative.</h1>");
}
else if(number===0){
    document.writeln("<h1>The number is zero.</h1>");
}
else{
    document.writeln("<h1>Invalid input.</h1>");
}

// 4. Write a program that takes a character (string of length 1) and returns true if it is a vowel, false otherwise
let vowel=prompt("Enter a character (string of length 1)");
document.writeln("<h1>Vowel Check</h1><br> You entered: " + vowel + "<br><br>");
if(vowel.length===1 && (vowel.toLowerCase()==='a' || vowel.toLowerCase()==='e' || vowel.toLowerCase()==='i' || vowel.toLowerCase()==='o' || vowel.toLowerCase()==='u')){
    document.writeln("<h1>True</h1>");
}
else{
    document.writeln("<h1>False</h1>");
}

// 5. Write a program that:
document.writeln("<h1>Password Validation</h1>");
// a. Store correct password in a JS variable.
let password="mySecretPassword123";
// b. Asks user to enter his/her password
let userPassword=prompt("Enter your password");
// c. Validate the two passwords:
if(userPassword===password){
    document.writeln("<h1>Correct! Login successful.</h1>");
}
else{
    document.writeln("<h1>Incorrect password.</h1>");
}

// 6. This if/else statement does not work. Try to fix it:
var hour=+prompt("Enter the current hour (0-23)");
var greeting;
document.writeln("<h1>Current Hour: " + hour + "</h1>");
// 0-3 am midnight
if (hour <=3) {
greeting = "Midnight";
document.writeln("<h1>" + greeting + "</h1>");
}
// 4-11 am morning 
else if(hour <=11){
greeting = "Good morning";
document.writeln("<h1>" + greeting + "</h1>");
}
// 12-15 pm afternoon
else if(hour <=15){
greeting = "Good afternoon";
document.writeln("<h1>" + greeting + "<br> Good day" + "</h1>");
}

// 16-17 pm evening
else if(hour <=17){
greeting = "Good evening";
document.writeln("<h1>" + greeting + "</h1>");
}
// 18-23 am night
else if(hour <=23){
greeting = "Good night";
document.writeln("<h1>" + greeting + "</h1>");
}
else{
greeting = "Invalid hour";
document.writeln("<h1>" + greeting + "</h1>");
}

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
let time=+prompt("Enter time in 24 hours clock format (e.g., 1900 for 7pm)");
document.writeln("<h1>Time entered: " + time + " "+ " O'Clock </h1>");
if(time>=0 && time<1200){
document.writeln("<h2>Good Morning!</h2>");
}
else if(time>=1200 && time<1700){
document.writeln("<h2>Good Afternoon!</h2>");
}
else if(time>=1700 && time<2100){
document.writeln("<h2>Good Evening!</h2>");
}
else if(time>=2100 && time<2359){
document.writeln("<h2>Good Night!</h2>");
}
else{
document.writeln("<h2>Invalid Input!</h2>");
}
// ------End of Chapter 12-13------



