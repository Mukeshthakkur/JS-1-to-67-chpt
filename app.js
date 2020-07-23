
//   CHAPTER NO.1 START

// TASK NO.1
// alert ("Welcome to our Website")       



// TASK no.2
// var a = ("Error! Please enter a valid password.");      
// alert (a);



// TASK no 3
//   alert("Welcome to js land... \nHappy Shopping!" )




// TASK no 4
// var a = ("Welcome to our website" );  
// alert(a)        
// var b = ("Happy Coding \nPrevent this page from creating additional dialogs.");
// alert(b)



// TASK no.5
// var a = ("Hello... I can run JS through my web browser's console");
// console.log (a);              



// TASK NO.6 AND NO.7 DONE









// CHAPTER 2 START

// TASK no 1
// var a = prompt("Username");           



// TASK no 2      
// var a = prompt("Username");           
// var b = prompt("My Name", "Mukesh Thakur");     
// alert(a+ " " +b);



// TASK no.3
// var a = prompt("message", "Hello World");       
// alert(a);



// TASK no.4
// var students = "Mukesh Thakur" 
// var age = "20 years old"
// var course ="Certified Mobile Application Development"
// alert(students)
// alert(age)
// alert(course)



// TASK no 5 

// var a =  " PIZZA \n PIZZ \n PIZ \n PI \n P "
// alert(a)



// TASK No.6
// var a = prompt("enter your email name");    
// alert("My email adress is" + " " + a + "@email.com")



// TASK no 7  
// var book =prompt("book", " “A smarter way to learn JavaScript”");   
// alert("I am trying to learn from the Book A smarter way to learn JavaScript.")



// TASK no 8
// var a;                      
// document.write("Yah! I can write HTML content through JavaScript")



// TASK no 9
// var a = " “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";    
// var b = " “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” "; 
// alert(b);
// document.write(a);









// CHAPTER 3 START

// TASK no 1
// var age = "I am 18 years old";   
// alert(age)                 



// TASK no 2  SKIPPED
// var a ;                 
// alert("show visited number")



// TASK no 3
// var birthyear = 1996     
// document.write("My birth year is "+birthyear)



// TASK no 4
// var name = prompt("Enter your name:");       
// var product = prompt("Enter product's name:");
// var quantity = prompt("How many products you want:", "Type here");

// if (name  && product  && quantity ) {
// document.write (name + " " +  "ordered" + " " + quantity + " " + product + " " + "on Fun Clothing Store.")
// }









//CHAPTER 4 START

// TASK no 1                          
// var a = "I";            
// var b = " am";
// var c = " Web Developer";
// var d = (a+b+c);
// alert(d);



// TASK no 2
//LEGAL VARIABLE NAMES

// var name = "hello";         (a)
// alert(name)
// var Name = "hello";         (b)
// alert(Name)
// var namE = "hello";         (c)
// alert(namE)         
// var Name$ = "hello";         (d)
// alert(Name$)   
// var Na1me = "hello";           (e)
// alert(Na1me)      


//ILLEGAL VARIABLE NAMES

// var ?age = "hello";         (a)
// alert(?age)             
// var 1age = "hello";         (b)
// alert(1age)
// var age! = "hello";         (c)
// alert(age!)
// var !age = "hello";         (d)
// alert(!age)
// var 132= "hello";           (e)
// alert(132)



// TASK no 3     
// var a = " a) 1) You can not use numbers or question mark or symbols in start.";
// var b = " 2)You can use capital letters everywhere in the word.";
// var c = " b) Variable names can only contain: 1) Uppercase, 2) Lowecase, 3) Numbers can not be used at start, but can be used after start 4) Question mark cannot be used. ";
// var d = " c) Variable must begin with a symbol, capital-letter or small letter. "
// var e = " d) Variable names are sensitive case."
// var f = " e) Variables names should not be js keywords."
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(f)









//CHAPTER 5 START

// TASK NO 1 AND 2
// var a = +prompt("enter first value");     
// var b = prompt("enter operator");
// var c = prompt("enter second value");
// if (b == "+") {
//     document.write((+a)+(+c))
// }
// else if(b == "-") {
//     document.write(a-c)
// }
// else if(b == "*") {
//     document.write(a*c)
// }
// else if(b == "/") {
//     document.write(a/c)
// }
// else if(b == "-") {    
//     document.write(a-c)
// }



// TASK no 3 (a)

// var a = 2 + 2 
// document.write(a)


// (b)
// var a= 23
// document.write("value after varible declaration is :  "+ a)



// var a = prompt("enter your name");     (c)
// document.write("32" + " " + a);


// var a = "Initial value: 5";       (d)
// document.write(a);


// var a = 5;                (e)
// var b = ++a;
// document.write(b)


// var a = 5;                   (f)
// var b = ++a;
// document.write("value after increament is" + " " + b)


// var a = 7;                     (g)
// var b = a + 7;
// document.write(b)


// var a = 2                     (h)
// var b = 11
// var c = (a + b)
// document.write("Value after addition is: " + c)


// var a = 8;                   (i)
// var b = --a;
// document.write(b)


// var a = 8;                   (j)
// var b = --a;
// document.write("value after decreament is" + b)


// var a = 12;               (k)
// var b = 3;
// var c = (a/b);
// document.write(
//     "remainder is" + " " + c
// )


// var a = 9;              (l)
// var b = 3;
// var c = (a/b);
// document.write(
//     "remainder is" + " " + 0
// )



// TASK no 4
// var quantity = prompt("how many tickets:", "5");      
// var price = "600";
// document.write("Total cost to buy" + " " + quantity + " tickets to a movie is" + " " + quantity*price)



// TASK no 5
// var num = prompt("Enter a number to get multiplication table:");
// for (var i = 1; i <= 10; i++) {            
//     document.write(num + "x" + i + "=" + num*i + "<br>")
// }



// TASK no 6 
// var Far = prompt("Enter temperature in farhenheit to convert in celsius:");
// var toCel = (Far - 32) * 5/9;
// var Cel = prompt("Enter temperature in celsius to convert in farhenheit:")
// var toFar = (Cel * 9/5) + 32;
// document.write(Far + "C is " + toCel + "F" + "<br>" + 
//                Cel + "F is " + toFar + "C");



// TASK no 7
// var a = prompt("one shirt cost=300pkr", "how many shirts you want to buy");     
// var b = (a*300)

// var c = prompt("one jeans cost=500pkr", "how many jeans you want to buy");
// var d = (c*500 + 200);

// document.write("Price of shirt is 300" + " <br>" + "Quantity of shirt is" + " " + a + " <br>" +
//                 "Price of jeans is 500" + " <br>" + "Quantity of jeans is" + " " + c + " <br>" +
//                 "Shipping Charges 200" + " <br>" + "Total cost of your order is" + " " + ((+b)+(+d)))



// TASK no 8
// var obtain = prompt("enter your obtained marks");    
// var sign = prompt("enter operater");
// var total = prompt("enter total marks");

// if (sign === "%") {
//     document.write("Total Marks:" + " " + total + " <br>" +
//      "Marks Obtained:" + " " + obtain + " <br>" +
//       "Percentage:" + " " + obtain/total*100)
// }



// TASK no 9
// var dollar = prompt("Enter US Dollars:");             
// var riyals = prompt("Enter Saudi Riyals:");
// document.write("Total Currency in PKR:" + ((+104.80*dollar)+(+28*riyals)))



// TAKS no 10
// var val = prompt("Enter a number:")
// var a = 5;
// var b = 10;
// var c = 2;
// alert(((+val)+(+a))*10/2)



// TASK no 11
// var a = prompt("Type current year");              
// var b = prompt("Type your birth year");
// document.write("Current Year:" + " " + a + " <br>" + " Birth Year:" + " " + b + " <br>" +
//                   " Your Age Is:" + " " + (a-b) )



// TASK no 12
// var a = prompt("enter radius of a circle");                 
// var b = (2*3.142*a);
// document.write("Radius of a circle is:" + " " + a + " <br>" + "The circumference is:" +
//  " " + b + " <br>" + " The area is:" + " " + (3.142*a*a))



// TASK no 13
// var a = prompt("Enter your favourite snack:");              
// var b = prompt("Enter your current age:");
// var c = prompt("Enter your estimated age:");
// var d = prompt("Enter amount of snacks per day:");
// document.write("You will need" + " " + ((c-b)*365*d) + " " + a + " to last you until the ripe old age of" + " " + c)













//CHAPTER 6-9 START

// TASK no 1
// var a = prompt("Enter value:");        
// document.write("Result:" + " <br>" + "The value of a is:" + " " + a + " <hr>" + " <br>" + " <br>" +
//                 "The value of ++a is:" + " " + ++a + " <br>" + "Now the value of a is:" + " " + a 
//                 + " <br>" + " <br>" + "The value of a++ is:" + " " + a + " <br>" + "Now the value of a is:" + " " +
//                 ++a + " <br>" + " <br>" + "The value of --a is:" + " " + --a + " <br>" +
//                  "Now the value of a is:" + " " + a + " <br>" + " <br>" + 
//                  "The value is a-- is:" + " " + a + " <br>" + "Now the value of a is:" + 
//                   " " + --a) 



// TASK no 2
// if var a = 2, b = 1;     
// Then --a = 1;
//      (2-1) = 1

//         --a    -     --b      = 1;
//      (2-1=1) 1 -   (1-1=0) 0  = 1;

//        --a     -     --b      +     ++b      = 2;
//      (2-1=1) 1 -   (1-1=0) 0  +   (0+1=1) 1  = 2; 

//        --a     -     --b      +     ++b      +    b--   =3;
//      (2-1=1) 1 -   (1-1=0) 0  +   (0+1=1) 1  +  (1=1) 1 =3;

// var a = 2;
// var b = 1;
// var c = --a - --b + ++b + b--;
// alert(c)



// TASK no 3
// var a = prompt("Enter your name:");       
// alert("Welcome Mr:" + " " + a)



// TASK no 4 and 5
// var a = prompt("Enter a number to get it's table:");  
// if (a > 0 || a < 1000) {
//     for (var i = 1; i <= 10; i++) {
//   document.write(a + "x" + i + "=" + a*i + "<br>")
//     }
// }
// else {
//     for (var i = 1; i <= 10; i++) {
//         document.write("5" + "x" + i + "=" + 5*i + "<br>")
//           }
// }



// TASK no 6
// var a = prompt("Enter obtained marks of English:");   
// var b = prompt("Enter obtained marks of Sindhi:");  
// var c = prompt("Enter obtained marks of Maths:");
//  document.write("Subject" + " Total.M" + " " + "Obtained.M" + " " +"Percentage" + 
//               "<br>" + "English" + " 100" + " " + a + " " + a/100*100 +"%"+ "<br>"
//               + "Sindhi" + " 100" + " " + b + " " + b/100*100 +"%"+ "<br>"
//               + "Maths" + " 100" + " " + c + " " + c/100*100 +"%" + "<br>"
//               + "300" + " " + ((+a)+(+b)+(+c)) + " " + ((+a)+(+b)+(+c))/300*100 + "%" )









//CHAPTER 9-11 START

// TASK no 1
// var a = prompt("Enter your city's name:");         
// if (a === "karachi") {
//     alert("Welcome to the city of lights.")
// }            
// else if (a === "multan") {
//     alert("Welcome to the city of saints.")
// }                    
// else if (a === "sialkot") {
//     alert("Welcome to the city of sports.")
// }
// else {
//     alert("Welcome to the city.")
// }



// TASK no 2
// var a = prompt("Enter your gender:");           
// if (a === "male") {
//     alert("Good Morning Sir.")
// }
// else if (a === "female") {
//     alert("Good Morning Ma'am.")
// }
// else {
//     alert("Good Morning")
// }



// TASK no 3
// var a = prompt("Enter a traffic signal color:");    
// if (a == "red") {
//     alert("Must Stop!")
// }
// else if (a == "yellow") {
//     alert("Ready to move!")
// }
// else if (a == "green") {
//     alert("Move now.")
// }
// else {
//     alert("Please enter correct word!")
// }



// TASK no 4
// var a = prompt("Enter your remaining fuel in numbers of liter:");           
// if (a <= "0.25") {
//     alert("Please refill the fuel in your car.")
// }
// else {
//     alert("It's fine!")
// }



// TASK no 5
// var a = 4;                                 
// if (++a === 5)
// { alert("given condition for variable a is true"); 
// }
// var b = 82; 
// if (++b === 83)
// { alert("given condition for variable b is true"); } 

// var c = 12; 
// if (++c === 13)
// { alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } 
// if (c < 14){ alert("condition 3 is true"); } 
// if(++c === 14){ alert("condition 4 is true"); } 

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals"); } 

// if (true){ alert("True"); } 
// if (false){ alert("False"); } 



// TASK no 6
// var a = prompt("Enter obtained marks in English:");   
// var b =  prompt("Enter obtained marks in Urdu:");
// var c =  prompt("Enter obtained marks in Science:");
// var d = (((+a)+(+b)+(+c))/300*100);
// if (d >= 60 && d < 70) {
//         document.write("Mark Sheet" + "<br>" + 
//                         "Total marks:" + " " + "300" + "<br>"
//                         +"Marks obtained:" + " " + ((+a)+(+b)+(+c)) + "<br>"
//                         + "Percentage:" + " " + d + "%" + "<br>" 
//                         + "Grade:" + " " + "B" + "<br>" 
//                         + "Remarks:" + " " + "You need to improve" )
// }               
// else if (d >= 70 && d < 80) {
//         document.write("Mark Sheet" + "<br>" + 
//                         "Total marks:" + " " + "300" + "<br>"
//                         +"Marks obtained:" + " " + ((+a)+(+b)+(+c)) + "<br>"
//                         + "Percentage:" + " " + d + "%" + "<br>" 
//                         + "Grade:" + " " + "A" + "<br>" 
//                         + "Remarks:" + " " + "Good" )
// } 
// else if (d >= 80) {
//         document.write("Mark Sheet" + "<br>" + 
//                         "Total marks:" + " " + "300" + "<br>"
//                         +"Marks obtained:" + " " + ((+a)+(+b)+(+c)) + "<br>"
//                         + "Percentage:" + " " + d + "%" + "<br>" 
//                         + "Grade:" + " " + "A-one" + "<br>" 
//                         + "Remarks:" + " " + "Excellent" )
// } 
// else if(d < 60) {
//         document.write("Mark Sheet" + "<br>" + 
//                         "Total marks:" + " " + "300" + "<br>"
//                         +"Marks obtained:" + " " + ((+a)+(+b)+(+c)) + "<br>"
//                         + "Percentage:" + " " + d + "%" + "<br>" 
//                         + "Grade:" + " " + "Fail" + "<br>" 
//                         + "Remarks:" + " " + "Sorry" )
// } 
// else {
//         document.write("Please type correct")
// }



// TASK no 7
// var a = prompt("Enter one secret digit:");   
// if (a == "4") {
//     alert("Bingo! Correct answer")    
// }
// else if (a == "5") {
//     alert("Close enough to the correct answer")
// }
// else if (a == "3") {
//         alert("Close enough to the correct answer")
//     }
// else {
//         alert("Too Far")
// }



// // TASK no 8
// var a = prompt("Enter a number:")
// var b= a % 3 ;
// if (b == 0){alert(a+" is divisble with 3")}
// else { alert (a+"  is not divisble with 3")}



// TASK no 9
// var a = prompt("Enter a number:");
// var b = a % 2 ;

// if (b == 0){alert (a+" is an even number")}
// else { alert(a + " is an odd number")}



// TASK NO.10
// var a = prompt("Enter the temperature:");      
// if (a > 40) {
//     alert("It is too hot to outside.")
// }
// else if (a > 30) {
//     alert("The Weather today is normal.")
// }
// else if (a > 20) {
//     alert("Today's weather is cool.")
// }
// else if (a > 10) {
//     alert("OMG! Today's weather is so cool.")
// }
// else {
//     alert("Please enter correct word.")
// }



// TASK NO.11
// var a = prompt("Enter first value:");            
// var c = prompt ("Enter operator:");
// var b = prompt ("Enter second value:");

// if (c == "+") {
//     alert((+a)+(+b))
// }
// else if (c == "-") {
//     alert(a-b)
// }
// else if (c == "*") {
//     alert(a*b)
// }
// else if (c == "/") {
//     alert(a/b)
// }
// else if (c == "%") {
//     alert(a/b*100)
// }










//CHAPTER 12-13

// TASK no 1
// var letter = prompt("Enter an alphabet:");
// letter.charCodeAt()   
// document.write(letter.charCodeAt() )



// TASK NO.2
// var num1 = prompt("Enter first number:");
// var num2 = prompt("Enter second number:");
// var max = Math.max(num1, num2);
// if (num1 == num2){
//        document.write("There are equal numbers and none is greater. " + "Number" + num1 + " = " + "number" + num2)
// }else if (num1 !== num2){
//        document.write("Larger number is: " + max + " and there is no equal numbers.")
// }


// // TASK NO.3
// var input = prompt("Enter a single number to check +, -, or zero:");
// if(input === "-" && "1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 93")
// {
//        document.write("Negative number")
// }else if(input === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//        document.write("Positive number")
// }else if(input === 0){
//        document.write("Zero")
// }else{
//        document.write("Incorrect input")
// }


// TASK NO.4 
// var a = prompt("Enter an alphabet:");          
// if (a == "a") {
//     alert("true")
// }else if(a == "e"){
//        alert("true")
// }else if(a == "i"){
//        alert("true")
// }else if(a == "o"){
//        alert("true")
// }else if(a == "u"){
//        alert("true")
// }
// else {
//     alert("false")
// }



// TASK NO.5
// var a = prompt("Enter your password:");     
// if (a == "mango") {
//     alert("Correct")
// }
// else if (a == "") {
//     alert("Please enter your password")
// }
// else {
//     alert("Incorrect")
// }



// TASK NO.6
// var greeting;                          
// var hour = 13; 
// if (hour < 18) { alert("Good Day")}
// else {
//     alert("Good Evening")
// }



// TASK NO.7
// var a = prompt("Enter time in numbers:", "1900");   
// if (a >= 0000 && a = 1200) {
//     alert("Good Morning")
// }
// else if (a >= 1200 && a < 1700) {
//     alert("Good Afternooon")
// }
// else if (a >= 1700 && a < 2100) {
//     alert("Good Evening")
// }
// else if (a >= 2100 && a <= 2350) {
//     alert("Good Night")
// }








//CHAPTER 14-16 START

// TASK NO.1
//  var a = ["Type here names"];
//  alert (a);




// // TASK NO.2
// var storeName = [];



// // // TASK NO.3 
// var a =["ali","aslam","zubair","abdul"]
// document.write(a)


// TASK NO.4
// var a = [2,5,6,8,10];
// document.write(a)




// TASK NO.5 

// var a =[true, false];
// alert(a)




// TASK NO.6

// var a = [ "Mukesh", 4, true];
// alert(a)


// TASK NO.7 
// var a = ["Qulaifications: <br> <br> 1) SSC <br> 2) HSC <br> 3) BCS <br> 4) BS <br> 5) BCOM <br> 6) MS <br> 7) M.Phil. <br> 8) PhD"]                                             
// document.write(a)              



// TASK no 8
// var a = ["Score of Michael is 320. Percentage: 64% <br> Score of John is 230. Percentage: 46% <br>"]
// a.push("Score of Tony is 480. Percentage: 96%")
// document.write(a)                     



// TASK no 9 (a)
// var a = prompt("Add a color", "yellow")     
// a.slice(a.length)
// var b = ["red blue orange green"];
// document.write(a + " " +b );


// (b)
// var a = prompt("Add a color", "pink")              
// a.slice(a.length)
// var b = ["red blue orange green"];
// document.write(b + " " +a );


// (c)
// var a = prompt("Add a color", "yellow")             
// var b = prompt("Add another color", "purple")
// a.slice(a.length)
// var c = ["red blue orange green"];
// document.write(a + " " +b + " " + c);


// (d)
// var a = ["red", " blue", " green"];            
// alert(a)
// a.shift("red")
// document.write(a)


// (e)
// var a = ["red", " blue", " green"];             
// alert(a)
// a.pop()
// document.write(a)


// (f)
// var arr = ["red", " blue" , " green"]
// var b = prompt("Enter which color you want to add: ")
// var c = prompt("Enter where you want to add this color: ")
// arr.slice(c,0,b)


// (f)
// var arr = ["red", " blue" , " green"]
// var b = prompt("Enter which color you want to add: ")
// var c = prompt("Enter where you want to add this color: ")
// arr.slice(c,1,b)



// TASK NO.10 
// var a= ["343","989","657","232","873"];
// var b = a.sort(function(a, b){return a-b});
// document.write(b)



// TASK NO.11 
// var cities=["Karachi","Hyderabad","Lahore","Islamabad","Quetta"]
// var selectedcities = cities.slice(2,4);

// document.write("Cities:"+"  "+cities +"<br>"+"<br>"+"Selected cities:"+"  "+selectedcities)




// TASK NO.12                     
// var arr = ["This","is","my","cat"]; 
// var b= arr.join(" ")
// document.write(b)




// TASK NO.13 
// var Device= ["keyboard","mouse"," printer","moniter"];
// document.write("Devices: " + "<br>" + Device + "<br>" + "<br>")
// document.write("Out: " + "<br>" + Device[0] + "<br>" + 
//               "Out: " + "<br>" + Device[1] + "<br>" + 
//               "Out: " + "<br>" + Device[2] + "<br>" + 
//               "Out: " + "<br>" + Device[3] )





// TASK NO.14 
// var Device= ["keyboard","mouse"," printer","moniter"];
// document.write("Devices: " + "<br>" + Device + "<br>" + "<br>")
// document.write("Out: " + "<br>" + Device[3] + "<br>" + 
//               "Out: " + "<br>" + Device[2] + "<br>" + 
//               "Out: " + "<br>" + Device[1] + "<br>" + 
//               "Out: " + "<br>" + Device[0] )



// TASK no 15
// var brand =  ["Apple", "Samsung", "Motorola", "Sony", "Haier"];
// document.write("<select>")
// for (var i = 0; i < brand.length; i++) {
//         document.write("<option>" + brand[i] + "</option>")
// }                                
// document.write("</select>")











//CHAPTER 17-20 START

// TASK NO.1
// var arr = [
//        [],
//        [],
//        []
// ];



// TASK NO.2 
// var arr = [
//        [0,1,2,3, "<br>"], 
//        [1,0,1,2, "<br>"],
//        [2,1,0,1]
// ];
// document.write(arr)




// TASK NO.3
// for (a = 1; a <= 10; a = a+1) {    
//     document.write(a + "<br>")
// }                           



// TASK NO.4
// var a = prompt("Enter a number to show it's multiplication table:");     
// var b = prompt("Enter a length:")
// if (a > 0 || a <= 1000) {
//     for (i = 1; i <= b; i++) {
//         document.write(a + "x" + i + "=" + a*i + "<br>")
//     }
// }



// TASK NO.5 
// var fruit = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var a = 0; a < fruit.length; a++){
//        document.write(fruit[a] + "<br>")
// }
// for(var b = 0; b < fruit.length; b++){
//        document.write("<br>" + "Element at index " + fruit.indexOf(fruit[b]) + " is " + fruit[b])
// }



// TASK NO.6
// document.write("Counting:" + "<br>")          
// for (i = 1; i < 16; i++) {
//     document.write( i + "," )
// }
// document.write("<br>" + "<br>")
// document.write("Reverse Counting:" + "<br>")
// for (i = 10; i > 0; i--) {
//     document.write(i + ",")
// }
// document.write("<br>" + "<br>")
// document.write("Even:" + "<br>")
// for (i = 0; i < 21; i = i+2) {
//     document.write(i + "," )
// }
// document.write("<br>" + "<br>")
// document.write("Odd:" + "<br>")
// for (i = 1; i < 20; i = i+2) {
//     document.write(i + ",")
// }
// document.write("<br>" + "<br>")
// document.write("Series:" + "<br>")
// for (i = 2; i < 21; i = i+2) {
//     document.write(i + "k,")
// }



// TASK NO.7
// var search = prompt("Welcome to Dipy-Bakery, What do you want to order:");
// var items = ["cake", "apple pie", "cookies", "chips", "patties"];
// if (items.indexOf(search) !== -1) {
//         alert(search + " is available at index" + " " + items.indexOf(search) + " "+  "in our bakery" )
// }
// else {
//         alert(search + " is not available")
// }



// TASK NO.8
// var large = [12,34,98,44,16];
// var max = Math.max(12,34,98,44,16);
// document.write("Array items: " + large + "<br>" +
//        "The largest number is " + max);



// TASK NO.9
// var small = [12,34,98,44,16];
// var min = Math.min(12,34,98,44,16);
// document.write("Array items: " + small + "<br>" +
//        "The smallest number is " + min);



// TASK NO.10
// for (var i=5; i<=100; i = i+5){
//     document.write(i + ",")
// }








// CHAPTER NO.21-25 START

// TASK NO.1
// var first = prompt("Enter your first name:");
// var last = prompt("Enter your last name");
// var full = first + " " + last;
// document.write("Welcome " + full)



// TASK NO.2
// var mob = prompt("Enter your favourite phone name:");
// var len = mob.length;
// document.write("My favourite phone is: " + mob + "<br>" + 
//               "Length of string: " + len)



// TASK NO.3
// var name = "Pakistani";
// var index = name.indexOf("n");
// document.write("String: " + name + "<br>" + 
//                 "Index of 'n': " + index)



// TASK NO.4
//  var name = "Hello World";
// var index = name.lastIndexOf("l");
// document.write("String: " + name + "<br>" + 
//                 "Last index of 'l': " + index)



// TASK NO.5
// var name = "Pakistani";
// var index = name.charAt(3);
// document.write("String: " + name + "<br>" + 
//         "Character at index 3: " + index)



// TASK NO.6
// var first = prompt("Enter your first name:");
// var last = prompt("Enter your last name");
// document.write("Welcome " + first + " " + last);



// TASK NO.7
// var city = "Hyderabad";
// var rep = city.replace("Hyderabad", "Islamabad");
// document.write("City: " + city + "<br>" + "After replacement: " + rep);



// TASK NO.8
// var para = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = para.replace(/and/g, "&");
// document.write("Paragraph: " + para + "<br>" + "After replacement: " + rep);



// TASK NO.9
// var str = "472";
// var num = parseInt("472");
// document.write("Value: " + str + "<br>" + "Type: string" + "<br>" +
//                "Value: " + num + "<br>" + "Type: number");



// TASK NO.10
// var user = prompt("Enter a word or phrase:");
// var upper = user.toUpperCase();
// document.write("User input: " + user + "<br>" + "Upper case: " + upper);



// TASK NO.11
// var input = prompt("Enter a word or phrase:");
// var firstChar = input.slice(0, 1);
// var otherChar = input.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var upper = firstChar + otherChar;
// document.write("User input: " + input + "<br>" + "Title case: " + upper);



// TASK NO.12 
// var num = "35.36";
// var rep = num.replace(".", "")
// document.write("Number: " + num + "<br>" + "Result: " + rep)



// TASK NO.13 
// var input = prompt("Enter your name:");
// for (var a = 0; a < input.length; a++){
//        if(input[a].charCodeAt("") === 33 || input[a].charCodeAt("") === 44 || input[a].charCodeAt("") === 46 || input[a].charCodeAt("") === 64){
//               document.write("Please enter a valid username." + "<br>" + " It does not contain ! , . or @")
//        }

// }




// TASK NO.14  
// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to our Bakery. What do you want to order sir/ma'am?");
// var lower = search.toLowerCase();
// var index = item.indexOf(lower);
// if(lower === item[0] || lower === item[1] || lower === item[2] || lower === item[3] || lower === item[4]){
//        document.write(lower + " is available at index " + index + " in our bakery")
// }else{
//        document.write("We are sorry! " + lower + " is not available in our bakery.")
// }



// TASK NO.15 SKIPPED
// var paword = prompt("Enter your password:");
// var length = paword.length;
// var firstChar = paword.slice(0, 1)
// var num = paword.slice(1)
// for(var i = 0; i < paword.length; i++){
//        if(length >= 6 || firstChar <= 9 ){
//               document.write("Entered password: " + paword + "<br>" +
//                     "Password can not begin with a number." + "<br>" + 
//                      "It should not more than 6 characters." + "<br>" + 
//                      "Please enter a valid password."  )
//        }
// }




// TASK NO.16 SKIPPED
// var uni = "University of Karachi";
// var split = uni.split("");
// document.write(split + "<br>")



// TASK NO.17 
// var input = "Pakistan";
// var sli = input.slice(-1)
// document.write("User input: " + input + "<br>" + 
//                  "Last character of input: " + sli)


// TASK NO.18 
// var string = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var str = string.toLowerCase();
// var split = str.split(" ");
// var count = 0;
// for(var i = 0; i < split.length; i++){
//        if (word == split[i])
//        count++;
// }
// document.write(count)









                //    CHAPTER NO.26-30 START

// TASK NO.1
// var num = prompt("Enter the positive number");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br>" +
//                "Round off value: " + round + "<br>" +
//                "Floor value: " + floor + "<br>" +
//                "Ceil value: " + ceil )              



// TASK NO.2
// var num = prompt("Enter the negative number");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br>" +
//                "Round off value: " + round + "<br>" +
//                "Floor value: " + floor + "<br>" +
//                "Ceil value: " + ceil ) 



// TASK NO.3
// var a = -6;
// var ab = Math.abs(a);
// document.write("The absolute value of " + a + " is " + ab)



// TASK NO.4
// var roll = alert("Roll dice")
// var random = Math.random() * 6;
// var round = Math.ceil(random)
// document.write("Random dice value: " + round)



// TASK NO.5
// var toss = alert("Toss")
// var random = Math.random() * 2;
// var round = Math.ceil(random);
// if (round == 1){
//     document.write("Random coin value: Heads")
// }else{
//     document.write("Random coin value: Tails")
// }



// TASK NO.6
// var toss = alert("Enter to random number");
// var random = Math.random() * 100;
// var round = Math.ceil(random);
// document.write("Random number between 1 and 100: " + round)



// TASK NO.7 
// var str = prompt("Enter your weight:");
// var matches = str.match(/(\d+)/);
// var sli = matches.slice(1)
// document.write("The weight of user is " + sli + " kilograms")


// TASK NO.8
// var input = prompt("Enter a number between 1 and 10");
// var random = Math.random() * 10;
// var ceil = Math.ceil(random);
// if (input == ceil) {
//     document.write("Congratulation! You win.")
// }else{
//     document.write("Sorry! Try again.")
// }











             //  CHAPTER NO.31-34

// TASK NO.1
// var date = new Date ();
// document.write(date);



// TASK NO.2
// var date = new Date();
// var month = date.getMonth()
// if (month == 0 ){
// document.write("January");
// }
// else if (month == 1){
//     document.write("February")
// }
// else if (month == 2){
//     document.write("March")
// }
// else if (month == 3){
//     document.write("April")
// }
// else if (month == 4){
//     document.write("May")
// }
// else if (month == 5){
//     document.write("June")
// }
// else if (month == 6){
//     document.write("July")
// }
// else if (month == 7){
//     document.write("August")
// }
// else if (month == 8){
//     document.write("September")
// }
// else if (month == 9){
//     document.write("October")
// }
// else if (month == 10){
//     document.write("November")
// }
// else if (month == 11){
//     document.write("December")
// }
// else {
//     document.write("Please Type Correct Date!")
// }



// TASK NO.3
// var date = new Date();
// var day = date.getDay();
// if (day == 0){
//     document.write("Sun")
// }
// else if (day == 1){
//     document.write("Mon")
// }
// else if (day == 2){
//     document.write("Tue")
// }
// else if (day == 3){
//     document.write("Wed")
// }
// else if (day == 4){
//     document.write("Thu")
// }
// else if (day == 5){
//     document.write("Fri")
// }
// else if (day == 6){
//     document.write("Sat")
// }
// else {
//     document.write("Please enter correct date!")
// }



// TASK NO.4
// var date = new Date();
// var day = date.getDay();
// if (day == 0 || day == 6){
//     document.write("It's Funday")
// }
// else{
//     document.write("It's working day")
// }



// TASK NO.5
// var date = new Date();
// var day = date.getDate()
// if (day <= 15){
//     document.write("First fifteen day of the month")
// }
// else{
//     document.write("Last fifteen day of the month")
// }



// TASK NO.6
// var date = new Date();
// var milli = date.getTime();
// var minut = milli/(1000*60*60);
// document.write("Current Date; " + date + "<br>" + 
//      "Elapsed milliseconds since January 1, 1970: " + milli + "<br>" + 
//      "Elapsed minutes since January 1, 1970: " + minut);



// TASK NO.7
// var date = new Date();
// var hour = date.getHours();
// if(hour <= 12){
//     document.write("It's AM" + )
// }
// else{
//     document.write("It's PM")
// }



// TASK NO.8 
// var laterDate = new Date("Dec 31, 2020");
// document.write("Later Date: " + laterDate)



// TASK NO.9 
// var ramadan = new Date("June 18, 2015");
// var ramaDay = ramadan.getTime();
// var nowdate = new Date();
// var today = nowdate.getTime();
// var diff = today - ramaDay
// var pastDay = diff/(1000*60*60*24)
// var accDay = Math.floor(pastDay)
// document.write(accDay + " days have passed sinnce 1st Ramadan, 2015")



// TASK NO.10
// var ref = new Date("January 1, 2020");
// var milli = ref.getTime();
// var today = new Date();
// var tdmilli = today.getTime();
// var diff = tdmilli - milli;
// var sec = diff/(1000*60)
// document.write("On reference date " + ref + " " + sec +
// " seconds had passed since beginning of 2020")



// TASK NO.11 
// var today = new Date();
// var date = new Date();
// var hour = date.setHours(22);
// document.write("Current date: " + today + "<br>" +
//     " 1 hour ago, it was " + date);



// TASK NO.12
// var today = new Date();
// var date = new Date();
// var nowYear = date.setFullYear(1920);
// document.write("Current date: " + today + "<br>" +
//  " 100 years back, it was " + date)



// TASK NO.13
// var age = prompt("Enter your age:");
// var date = new Date();
// var year = date.getFullYear();
// var dob = year - age;
// document.write("Your age is " + age + "<br>" + 
//        "Your birth year is " + dob)



// TASK NO.14
// var name = prompt("Enter your name");
// var month = prompt("Enter current month");
// var unit = prompt("Enter current units");
// var charges = prompt("Enter charges per unit");
// var late = +prompt("Enter late charges");
// var netAmount = unit * charges;
// var grossAmount = ((netAmount) + (late));

// document.write("<h1>K-Electric Bill</h1>" + "<br>" +
//   "Customer Name: " + name + "<br>" +
//   "Month: " + month + "<br>" + 
//   "Number of units: " + unit + "<br>" + 
//   "Charges per unit: " + charges + "<br>" + "<br>" + 
//   "Net Amount Payable (within Due Date): " + netAmount + "<br>" + 
//   "Late payment surcharge: " + late + "<br>" + 
//   "Gross Amount Payable (after Due Date): " + grossAmount)











                //    CHAPTER NO.35-38 START

// TASK NO.1
// var date = new Date();
// document.write(date);



// TASK NO.2
// function name(fname,lname){
//     document.write("Welcome " + fname + " " + lname)
// }
// name(prompt("Enter firstname:"), prompt("Enter lastname:"))



// TASK NO.3
// function data(num1, num2){
//         document.write(num1 + num2)
//     }
//     data(+prompt("Enter first number:"), +prompt("Enter second number:"))



// TASK NO.4
// function sum(num1, opr, num2){
//     if (opr == "+"){
//         document.write(num1 + num2)
//     }
//     else if (opr == "-"){
//         document.write(num1 - num2)
//     }
//     else if (opr == "%"){
//         document.write(num1 / num2)
//     } 
//     else if (opr == "x"){
//         document.write(num1 * num2)
//     } 
//     else {
//         document.write("Please type correct word!")
//     } 
// }
// sum(+prompt("Enter first number"), prompt("Enter operator"), +prompt("Enter second number") )



// TASK NO.5 
// function sqr(num){
//   document.write(num**2);
// }
// sqr(prompt("Enter a number"));



// TASK NO.6 skipped
// var b = 5;
// var b = n * (n - 1) * (n - 2) ** 1;
// document.write(b)




// TASK NO.7
// function count(start, end){
//     for(var a = start; a <= end; a++){
//         document.write(a + "<br>")
//     }
// }
// count(prompt("Enter start number"), prompt("Enter ending number"))



// TASK NO.8 SKIPPED
// function pow(base, perp){
//     function expo(){
//         var hyp = (base**2 + perp**2);
//         document.write(hyp + "=" + base**2 + "+" + perp**2)
//     }
//     expo()
// }
// pow(prompt("Enter Base"), prompt("Enter Perpendicular"))


// TASK NO.9 
// function area(width, length){
//     var sum = (width*length)
//     document.write("Area is =" + sum )
// }
// area(prompt("Enter width"), prompt("Enter length"));



// TASK NO.10 
//  var word = prompt (" enter your word :")
//  var check ="";
//  for(var a = word.length -1; a >=0 ; a--){
//         check += word[a]
//  }

//  if (word === check){
//         document.write(word + " is a palindrome word")
//  }
//  else{
//        document.write( word + " is not a palindrome")
//  }


// TASK NO.11

// function capital_letter(str) 
// {
//     str = str.split(" ");
//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }
//     return str.join(" ");
// }
// document.write(capital_letter("the quick brown fox."));


// // // TASK NO.12 
// function longWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// alert(longWord("web and mobile application development course"));




// TASK NO.13 
// function count(str, letr){
//        var string = str;
//        var lower = string.toLowerCase();
//        var split = lower.split("")
//        var num = 0;
//        for(var i = 0; i < split.length; i++){
//     if (letr == split[i])
//        num++
//        }
//        document.write(num) }
// count(prompt("Enter string:"), prompt("Enter letter"))



// TASK NO.14
// function circum(rad){
//       document.write("Circumference of circle " + "= " +2*3.142*rad)
// }
// circum(prompt("Enter radius"))

// function area(rad){
//     document.write("Area of circle = " + 3.142*rad**2)
// }
// area(prompt("Enter radius to find the area"));







                   //CHAPTER No. 38-42

// TASK NO.1 skipped



// TASK NO.2
// var input = prompt("Enter year: ");
// switch (input){
//        case  "2012":
//               alert(input + " is a leap year")
//               break;

//        case  "2012":
//               alert(input + " is a leap year")
//               break;

//        case  "2012":
//               alert(input + " is a leap year")
//               break;

//       default:
//               alert(input + " is not a leap year")
//               break;

// }



// TASK NO.3


// function sum(a , b, c){
//        var S = (a + b + c) / 2;
//        alert (S)
// }
// sum(prompt("Enter side a:"), prompt("Enter side b:"), prompt("Enter side :"))
// function area(){

//        var length =  (s*((s-side1)*(s-side2)*(s-side3)));
//        console.log(area);

//        document.write("Area of the triangle is " + length)
// } 

// area(S)






// TASK NO.4 skipped

// TASK NO.5 skipped





// TASK NO.6 skipped

// function disemvowel(str) {             
//     let newString = " ";  
//     var length= str.length                          
//     for (let i = 0; i < str.length; i++)  
// {           
//       if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u" && length < 26)                                   
//        {           
//        newString += str[i];        
//       }; 
//     };   
//     alert(newString)  
//   };  
//   disemvowel(prompt("enter your sentence"))   



// TASK NO.7 skipped

// TASK NO.8 skipped
// function meter(a){
//          var b= a * 1000
//          document.write("in meter  "+b+ "<br>")
// }
// function feet(a){
//          var b= a * 3281
//          document.write("in feet  "+b+ "<br>")
// }
// function inches(a){
//          var b= a * 39370
//          document.write("in inches  "+b+ "<br>" )
// }
// function centimeters(a){
//          var b= a * 100000
//          document.write("in centimeters  "+ b+ "<br>")
// }

// meter(prompt("Enter Km to convert in meters e.g. 10,20,30"))
// feet(prompt("Enter Km to convert in feet e.g. 10,20,30"))
// inches(prompt("Enter Km to convert in inches e.g. 10,20,30"))
// centimeters(prompt("Enter Km to convert in meters e.g. 10,20,30"))


// }

// meter(prompt("enter km"))
// feet(prompt("enter km"))
// inches(prompt("enter km"))
// centimeters(prompt("enter km"))





              //   CHAPTER NO.43-48

// TASK NO.1 DONE



// TASK NO.2 DONE



// TASK NO.3 
// var val = 0;
// var num = document.getElementById("number")
// function increase(){
//    val++
//    num.innerHTML = val
// }
// var incInterval = setInterval(increase, 1000)

// var val = 0;
// var num = document.getElementById("number")
// function decrease(){
//        val--
//        num.innerHTML = val
//     }
// var decInterval =  setInterval(decrease, 1000)



// TASK NO.4 DONE



// TASK NO.5 skipped









                //   CHAPTER No.49-52

// // TASK NO.1
// function submit(){
//     var val = document.getElementsByClassName("form");
//     var p = document.createElement("p");
//     var textNode = document.createTextNode(val.value)
//     p.appendChild(textNode)
//     var Data = document.getElementById("copyData")
//     Data.appendChild(p)  
//     val.value = ""
// }



// TASK NO.2
// function readMore() {
// var text = "Sometimes we do something for pleasure in our free time it is called a hobby.There are many kinds of hobbies. Each person has it's own hobby according to his taste.My favourite hobby is stamp-collecting. I collect new as well as old stamps. I have never bought a simple stamp froma shop. It is full of pleasure and knowledge. I enjoyed itvery much."
// var more = document.getElementById("article");
// more.innerHTML = text
// }



// TASK NO.3 skipped




       //      //  CHAPTER NO.52-57

// TASK NO.1
// function showImage(e){
//        console.log(e.src)
//        var modalPic = document.getElementById('modalPic')
//        modalPic.src = e.src
// }







            //  CHAPTER NO.58-67

// TASK NO.1 (I)
// var formData = document.getElementById("main-content");



// TASK NO.(II)
// var child = document.getElementById("main-content").children;
// console.log(child);



// TASK NO.(III) 
// var render = document.getElementsByClassName("render");
// render.innerHTML
// document.write(render.innerHTML)



// TASK NO.(IV) 
// var first = document.getElementById("first-name");
// var name = document.createTextNode("Mukesh");
//  first.appendChild("name")



// TASK NO.(V) SKIPPED



// TASK NO.2 (I)
// var nType = document.getElementById("form-content").nodeType;
// console.log(nType);



// TASK NO.(II) 
// var nType = document.getElementById("lastName").nodeType;
// var child = document.getElementById("lastName").childNodes;
// console.log(nType);
// console.log(child)



// TASK NO.(III)
// var child = document.getElementById("lastName").childNodes;
//  child.innerHTML = "Mukesh";
//  console.log(child)



// TASK NO.(IV)
// var child = document.getElementById("main-content").firstChild;
// var lachild = document.getElementById("main-content").lastChild;
// console.log(child)
// console.log(lachild)



// TASK NO.(V)
// var presib = document.getElementById("lastName").previousSibling;
// var nexsib = document.getElementById("lastName").nextSibling;

// console.log(presib);
// console.log(nexsib);



// TASK NO.(VI)
// var pNode = document.getElementById("email").parentNode;
// var nType = document.getElementById("email").nodeType

// console.log(pNode)
// console.log(nType)

