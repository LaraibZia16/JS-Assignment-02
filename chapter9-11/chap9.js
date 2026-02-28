// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
let city=prompt("Enter city name");
if(city.toLowerCase()==="karachi"){
    document.writeln("<h1>Welcome to city of lights</h1>");
}

else{
    document.writeln("<h1>Welcome to " + city + "</h1>");
}

// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
let gender=prompt("Enter Your Gender");
if(gender.toLowerCase()==="male"){
    document.writeln("<h1>Good Morning Sir</h1>");
}
else if(gender.toLowerCase()==="female"){
    document.writeln("<h1>Good Morning Ma’am</h1>");
}   
else{
    document.writeln("<h1>Invalid Input</h1>");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
let signalColor=prompt("Enter traffic signal color");
if(signalColor.toLowerCase()==="red"){
    document.writeln("<h1>Must Stop</h1>");
}
else if(signalColor.toLowerCase()==="yellow"){
    document.writeln("<h1>Ready to Move</h1>");
}
else if(signalColor.toLowerCase()==="green"){
    document.writeln("<h1>Move Now</h1>");
}
else{
    document.writeln("<h1>Invalid Signal Color</h1>");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
let fuel=+prompt("Enter remaining fuel in car (in litres)");
if(fuel<0.25){
    document.writeln("<h1>Please refill the fuel in your car</h1>");
}
else{
    document.writeln("<h1>You have enough fuel in your car</h1>");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a) var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// b) var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
var b = 82; 
if (b++ === 83){
    alert("given condition for variable b is true");
}
// c) var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
var c = 12; 
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
// d) var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost;   
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// e) if (true){ alert("True"); } if (false){ alert("False"); }
if (true){
    alert("True");
}       
if (false){
    alert("False");
}
// f) if("car" < "cat"){ alert("car is smaller than cat"); }
if("car" < "cat"){
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
let totalMarks=300;
let marks1=+prompt("Enter marks obtained in subject 1");
let marks2=+prompt("Enter marks obtained in subject 2");
let marks3=+prompt("Enter marks obtained in subject 3");
let obtainedMarks=marks1+marks2+marks3;
let percentage=(obtainedMarks/totalMarks)*100;
document.writeln("<h1>Marks Sheet</h1><br>Total Marks: " + totalMarks + "<br>Marks Obtained: " + obtainedMarks + "<br>Percentage: " + percentage + "%<br>");
if(percentage>100 || percentage<0){
    document.writeln("Invalid Input");
}
else if(percentage>=80){
    document.writeln("Grade: A-one <br> Remarks: Excellent");
}
else if(percentage>=70){
    document.writeln("Grade: A <br> Remarks: Good");
}
else if(percentage>=60){
    document.writeln("Grade: B <br> Remarks: You need to improve");
}
else if(percentage<60){
    document.writeln("Grade: Fail <br> Remarks: Sorry");
}

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a) If user guesses the same number, show “Bingo! Correct answer”. b) If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
let secretNumber=9;
let userGuess=+prompt("Guess the secret number (between 1 and 10)");
if(userGuess===secretNumber){
    document.writeln("<h1>Bingo! Correct answer</h1>");
}
else if(userGuess+1===secretNumber || userGuess-1===secretNumber){
    document.writeln("<h1>Close enough to the correct answer</h1>");
}
else{
    document.writeln("<h1>Wrong guess! Try again.</h1>");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
let num=+prompt("Enter a number to check if it is divisible by 3");
if(num%3===0){
    document.writeln("<h1>The number " + num + " is divisible by 3.</h1>");
}
else{
    document.writeln("<h1>The number " + num + " is not divisible by 3.</h1>");
} 

// 9. Write a program to check whether the given input is an even number or an odd number.
let number=+prompt("Enter a number to check if it is even or odd"); 
if(number%2===0){
    document.writeln("<h1>The number " + number + " is an even number.</h1>");
}
else if(number%3===0){
    document.writeln("<h1>The number " + number + " is an odd number.</h1>");
}
else{
    document.writeln("<h1>Number is Not Even or Odd</h1>");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
let temperature=+prompt("Enter temperature in Celsius");
if(temperature>40){
    document.writeln("<h1>It is too hot outside.</h1>");
}
else if(temperature>30){
    document.writeln("<h1>The Weather today is Normal.</h1>");
}
else if(temperature>20){
    document.writeln("<h1>Todays Weather is Cool.</h1>");
}
else if(temperature>10){
    document.writeln("<h1>OMG! Today's Weather is so Cool.</h1>");
}
else{
    document.writeln("<h1>It is freezing outside.</h1>");
}

// 11. Write a program to create a calculator for +, -, *, / & % using if statements. Take the following input: a) First number b) Second number c) Operation (+, -, *, /, %) Compute & show the calculated result to user.
let firstNum=+prompt("Enter first number");
let operation=prompt("Enter operation (+, -, *, /, %)");
let secondNum=+prompt("Enter second number");
let result;
document.writeln("<h1>Calculator</h1>");
if(operation === "+"){
    result = firstNum + secondNum;
}
else if(operation === "-"){
    result = firstNum - secondNum;
}
else if(operation === "*"){
    result = firstNum * secondNum;
}
else if(operation === "/"){
    result = firstNum / secondNum;
}
else if(operation === "%"){
    result = firstNum % secondNum;
}
document.writeln(firstNum + " " + operation + " " + secondNum + " = " + result);

// --------End of Chapter 9-11--------

