// 1. Declare 3 variables in one statement.
let var1, var2, var3;

// 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names:
let myName = "Laraib";
let $myBatch = "Batch 18";
let _myTime = "11:00 AM - 01:00 PM";
let myCourseName = "web development";
let myNumber = 123;

// Illegal variable names:
// let 123myName = "John"; // Starts with a number
// let my-name = "John"; // Contains a hyphen
// let my name = "John"; // Contains a space
// let class = "Math"; // Reserved keyword
// let if = "condition"; // Reserved keyword

// 3. Display this in your browser
document.writeln("<h1>Rules for naming JS variables</h1><br>");
document.writeln("Variable names can only contain letters, numbers, dollar signs ($) and  underscores (_) For example $my_1stVariable. <br>");
document.writeln("Variables must begin with a letter, $ or _. For example: $name, _name or name. <br>");
document.writeln("Variable names are case sensitive. <br>");
document.writeln("Variable names should not be JS Reserved keywords. <br><br>");

// --------Start of Chapter 4--------