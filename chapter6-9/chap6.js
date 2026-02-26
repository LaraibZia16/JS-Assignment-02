document.writeln("<h1>Mathematical Expressions</h1>");

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
let num=+prompt("Enter a number");
document.writeln("<h1>Result</h1>");
document.writeln("The value of a is: " + num + "<br>------------------------------<br><br>");
document.writeln("The value of ++a is: " + (++num) + "<br>");
document.writeln("Now the value of a is: " + num + "<br><br>");
document.writeln("The value of a++ is: " + (num++) + "<br>");
document.writeln("Now the value of a is: " + num + "<br><br>");
document.writeln("The value of --a is: " + (--num) + "<br>");
document.writeln("Now the value of a is: " + num + "<br><br>");
document.writeln("The value of a-- is: " + (num--) + "<br>");
document.writeln("Now the value of a is: " + num + "<br><br><br>");

// 2. What will be the output in variables a, b & result after execution of the following script:
document.writeln("<h1>Output of a, b & result</h1>");
let a=2, b=1;
document.writeln("a is: " + a + "<br>");
document.writeln("b is: " + b + "<br>");
document.writeln("--a will be 1<br>");
document.writeln("--a - --b will be 1 - 0 = 1<br>");
document.writeln("--a - --b + ++b will be 1 - 0 + 1 = 2<br>");
document.writeln("--a - --b + ++b + b-- will be 1 - 0 + 1 + 1 = 3<br><br>");
let result=--a - --b + ++b + b--;
document.writeln("Result is: " + result + "<br><br>");

// 3. Write a program that takes input a name from user & greet the user.
let name=prompt("Enter your name");
document.writeln("<h1>Greeting</h1><br>Hey " + name + ", have a nice day! <br><br>");

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
let tableNum=+prompt("Enter a number to show its table");
if(tableNum==0){
    tableNum=5;
}
document.writeln("<h1>Multiplication Table</h1><br> Table of "  + ""+  tableNum + "<br><br>");
for(let i=1; i<=10; i++){
    document.writeln("<br>" + tableNum + "  x  " + i + "  =  " + tableNum*i + "<br>");
}
// 5. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in your browser like this.(Hint: user table)
let subject1 = prompt("Enter name of subject 1");
let subject2 = prompt("Enter name of subject 2");
let subject3 = prompt("Enter name of subject 3");

let totalMarks = 100;

let subject1Marks = +prompt("Enter obtained marks for " + subject1);
let subject2Marks = +prompt("Enter obtained marks for " + subject2);
let subject3Marks = +prompt("Enter obtained marks for " + subject3);

let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
let totalAllMarks = totalMarks * 3;
let percentage = (totalObtainedMarks / totalAllMarks) * 100;

let per1 = (subject1Marks / totalMarks) * 100;
let per2 = (subject2Marks / totalMarks) * 100;
let per3 = (subject3Marks / totalMarks) * 100;

document.writeln("<h1>Mark Sheet</h1>");

document.writeln("<table border='1'>");

document.writeln("<tr>");
document.writeln("<th>Subject</th>");
document.writeln("<th>Total Marks</th>");
document.writeln("<th>Obtained Marks</th>");
document.writeln("<th>Percentage</th>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + subject1 + "</td>");
document.writeln("<td>" + totalMarks + "</td>");
document.writeln("<td>" + subject1Marks + "</td>");
document.writeln("<td>" + per1 + "%</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + subject2 + "</td>");
document.writeln("<td>" + totalMarks + "</td>");
document.writeln("<td>" + subject2Marks + "</td>");
document.writeln("<td>" + per2 + "%</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + subject3 + "</td>");
document.writeln("<td>" + totalMarks + "</td>");
document.writeln("<td>" + subject3Marks + "</td>");
document.writeln("<td>" + per3 + "%</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<th></th>");
document.writeln("<th>" + totalAllMarks + "</th>");
document.writeln("<th>" + totalObtainedMarks + "</th>");
document.writeln("<th>" + percentage + "%</th>");
document.writeln("</tr>");

document.writeln("</table>");

// --------End of Chapter 6-9--------
