// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let num1=+prompt("Enter first number");
let num2=+prompt("Enter second number");
let sum=(num1)+(num2);
document.writeln("The sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
let sub=(num1)-(num2);
document.writeln("The subtraction of " + num1 + " and " + num2 + " is " + sub + "<br><br>");

let mul=(num1)*(num2);
document.writeln("The multiplication of " + num1 + " and " + num2 + " is " + mul + "<br><br>");

let div=(num1)/(num2);
document.writeln("The division of " + num1 + " and " + num2 + " is " + div + "<br><br>");

let mod=(num1)%(num2);
document.writeln("The modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br><br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
let variable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.writeln("Value after variable declaration is: " + variable + "<br><br>");

// c. Initialize the variable with some number.
variable=9;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.writeln("Initial value: " + variable + "<br><br>");

// e. Increment the variable.
variable++; 

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.writeln("Value after increment is: " + variable + "<br><br>");

// g. Add 7 to the variable.
variable=variable+7;    

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.writeln("Value after addition of 7 is: " + variable + "<br><br>");

// i. Decrement the variable.
variable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.writeln("Value after decrement is: " + variable + "<br><br>");

// k. Show the remainder after dividing the variable’s value by 3. (Use modulus operator)
let remainder=variable%3;
document.writeln("The remainder is: " + remainder + "<br><br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets
let ticketPrice=600;
let ticketbuying=prompt("Enter number of tickets you want to buy");
let totalCost=ticketPrice*ticketbuying;
document.writeln("<h1>Cost of movie ticket</h1><br>Total cost to buy " + ticketbuying + " tickets is " + totalCost + " PKR <br><br>");

// 5. Write a script to display multiplication table of any number in your browser.
let tableNum=+prompt("Enter a number to show its table");
document.writeln("<h1>Multiplication Table</h1><br> Table of "  + ""+  tableNum + "<br><br>");
for(let i=1; i<=10; i++){
    document.writeln("<br>" + tableNum + "  x  " + i + "  =  " + tableNum*i + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
let celsiusTemp=+prompt("Enter temperature in Celsius");
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let fahrenheitTemp=(celsiusTemp*9/5)+32;
document.writeln("<h1>Temperature Converter</h1><br><br>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F <br>");
// c. Now store a Fahrenheit temperature into a variable.
let fahrenheitTemp2=+prompt("Enter temperature in Fahrenheit"); 
// d. Convert it to Celsius & output “NNoF is NNoC”.
let celsiusTemp2=(fahrenheitTemp2-32)*5/9;
document.writeln("<br>" + fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C <br><br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
// a. Price of item 1
// b. Price of item 2
let item1Price=+prompt("Enter price of item 1");
let item1Quantity=+prompt("Enter quantity of item 1");
document.writeln("<h1>Shopping cart system for an e-commerce website</h1><br><br>Price of item 1 is " + item1Price + " PKR<br>" + "Quantity of item 1 is " + item1Quantity + "<br>");
let item2Price=+prompt("Enter price of item 2");
let item2Quantity=+prompt("Enter quantity of item 2");
document.writeln("Price of item 2 is " + item2Price + " PKR<br>" + "Quantity of item 2 is " + item2Quantity + "<br>");
let shippingCharges=100;    
let totalItemCost=item1Price*item1Quantity+item2Price*item2Quantity+shippingCharges;
document.writeln("<br>Total cost of your order is " + totalItemCost + " PKR <br><br>");

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
let totalMarks=980;
let obtMarks=+prompt("Enter Your Obtain Marks");
let percentage=(obtMarks/totalMarks)*100;
document.writeln("<h1>Percentage Calculator</h1><br>Total Marks = " + totalMarks + "<br>Your Obtained Marks = " + obtMarks + "<br> Your Percentage = " + percentage +"%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression (Hint: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
let usDollars=+prompt("Enter amount in US Dollars");
let saudiRiyals=+prompt("Enter amount in Saudi Riyals");
let totalPKR=(usDollars*104.80)+(saudiRiyals*28);
document.writeln("<h1>Currency Converter</h1><br><br>Total Currency in PKR: " + totalPKR + " PKR <br><br>");

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
let programNum=5;
//a. Add 5, b. Multiply by 10, c. Divide the result by 2
let resultNum=(((5+5)*10)/2);
document.writeln("<h1>Arithmetic Operations</h1><br>Result is: " + resultNum + "<br><br>");

//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their age based on the stored values. Output them to the screen like so: “They are NN years old”.
let currentYear=+prompt("Enter current year");
let birthYear=+prompt("Enter your birth year");
let age=currentYear-birthYear;
document.writeln("<h1>Age Calculator</h1><br>Current Year: " + currentYear + "<br>Birth Year: " + birthYear + "<br>Your Age is: " + age + " years <br><br>");

// 12. The Geometrizer: Calculate properties of a circle, using the definitions here. a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint: Circumference of a circle = 2 π r , π = 3.142) c. Calculate the area based on the radius, and output “The area is NN”. (Hint: Area of a circle = π r2, π = 3.142)
let radius=+prompt("Enter radius of a circle");
let circumference=2*3.142*radius;
document.writeln("<h1>Geometrizer</h1><br>The circumference is: " + circumference + "<br>");
let area=3.142*(radius**2);
document.writeln("The area is: " + area + "<br><br>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NN to last you until the ripe old age of NN”.
let favoriteSnack=prompt("Enter your favorite snack");
let currentAge=+prompt("Enter your current age");
let maxAge=+prompt("Enter your maximum age");
let amountPerDay=+prompt("Enter estimated amount of snack you eat per day");
let totalSnack=(maxAge-currentAge)*365*amountPerDay;
document.writeln("favorite snack: " + favoriteSnack + "<br>Current age: " + currentAge + "<br>Estimated maximum age: " + maxAge + "<br>Amount of snacks per day: " + amountPerDay + "<br><br>");
document.writeln("<h1>Lifetime Supply Calculator</h1><br>You will need " + totalSnack + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
