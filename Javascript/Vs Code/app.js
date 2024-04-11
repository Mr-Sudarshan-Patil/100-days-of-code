const prompt=require('prompt-sync')();

// ===========Practice QS 1===============

// console.log("Hellow Sudarshan");

// let a=prompt("Enter the color");

// if(a=="red"){
//     console.log("Stop");
// }
// if(a=="yellow"){
//     console.log("Stop Away");
// }
// if(a=="green"){
//     console.log("GO");
// }


// ====================End Practice QS1=======================

// let b=5;
// let c=6;
// console.log(`the a is ${b} and b is ${c} and the total sum is ${b+c}`);

// let str="Spp";

// if((str[0]=='a' || str[0]=='A') && (str.length >= 3)){
//     console.log("Good String");
// }
// else{
//     console.log("Bad String");
// }


// ===========Practice QS 2===============


// Case 1: using if else

// let size=prompt("Enter the size of the popcorn bucket")

// if(size=="XL" || size=="xl"){
//     console.log("The Price is RS. 250");
// }

// else if(size=="L" || size=="l"){
//     console.log("The Price is RS. 200");
// }

// else if(size=="M" || size=="m"){
//     console.log("The Price is RS. 100");
// }

// else if(size=="S" || size=="s"){
//     console.log("The Price is RS. 50");
// }

// Case 1: swich case


// let size=prompt("Enter the size of the popcorn bucket");

// switch(size){
//     case "XL":
//         console.log("The Price is RS. 250");
//         break;
    
//     case "L":
//         console.log("The Price is RS. 200");
//         break;
    
//     case "M":
//         console.log("The Price is RS. 100");
//         break;

//     case "S":
//         console.log("The Price is RS. 50");
//         break;
// }
// ===========End Practice QS 2===============l




// ==================================Assignment===================================================

/*

JS (Part 2)
Practice Questions


*/

// =====================================Q1=================================================

// Qs1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

// let num=prompt("Enter the number");

// if(num%10==0){
//     console.log("good");
// }

// else{
//     console.log("Bad");
// }


// ================================================Q2=======================================


// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]



// let first_name=prompt("Enter you firstName");
// let age=prompt("Enter you age");

// let msg=(`${first_name} is ${age} years old.`)

// alert(msg);



//============================================Q3===========================================================

// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]


// let months=prompt("Enter the Quarter. e.g Q1 for Quarter 1, Q2 for Quarter 2, Q3 for Quarter 3, Q4 for Quarter 4");

// switch(months){
//     case "Q1":
//         console.log("January, February, March");
//         break;

//     case "Q2":
//         console.log("April, May, June");
//         break;

//     case "Q3":
//         console.log("July, August, September");
//         break;
    
//     case "Q4":
//         console.log("October, November, December");
//         break;
    
//     }



// ====================================Q4========================================================



// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
// length greater than 5.
// For a given string print if it is golden or not.





// let str=prompt("Enter the name");

// if((str[0]=='a' || str[0]=='A') && (str.length >= 5)){
//     console.log("golden string");
// }
// else{
//     console.log("Not a golden string");
// }



//=======================================Q5=================================


// let a=prompt("Enter the number of a");
// let b=prompt("Enter the number of b");
// let c=prompt("Enter the number of c");

// console.log(`a is ${a}, b is ${b} and c is ${c}`);

// if(a>b && a>c){
//     console.log("a is a greater number", a);
// }

// else if(b>a && b>c){
//     console.log("b is a greater number", b);
// }

// else{
//     console.log("c is a greater number", c);
// }




// =========================================================================================


// Qs . For the five string 
//  let msg ="help!";
//  Trim it & convert it to uppercase


// let msg="help!";

// let tm=msg.trim();
// console.log(tm.toUpperCase());


// let name="ApnaCollege";

// let pice=name.slice(4);
// console.log(pice);
// console.log(pice.replace("l", "t"));


// let start=['january', 'july', 'march', 'august']
// console.log(start);
// start.shift();
// start.shift();
// start.unshift('july', 'june');
// console.log(start);




// ==================Assignment================

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(0, n);
// console.log(ans);



//     Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length-n);
// console.log(ans);

//     Qs3. Write a JavaScript program to check whether a string is blank or not.

// let str=prompt("Enter a string");

// if(str.length<=0){
//     console.log("String is Empty");
// }
// else{
//     console.log("String is not empty");
// }
//     Qs4. Write a JavaScript program to test whether the character at the given (character)
//     index is lower case.


// let str="ApNaCoLleGe";
// let no=0;
// if(str[no]==str[no].toLocaleLowerCase()){
//     console.log("Caracter is lower case");
// }
// else{
//     console.log("Caracter is upper case");;
// }

//     Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.


// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

//     Qs6. Write a JavaScript program to check if an element exists in an array or not.


// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];

// let num=2;
// console.log("previous arr: ", arr);

// for(let i=0; i<=arr.length; i++){
//     if(arr[i]===num){
//         arr.splice(i,1);
//     }
// }


// console.log("Updated arr: ", arr);



//Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

// let n = 287152;

// let count=0;

// let tem=287152;

// while(tem > 0){
    
//     tem= Math.floor(tem/10);
//     count++;

// }
// console.log(count);


// Qs3.Write a JS program to find the sum of digits in a number.
// Example: if number=287152, sum=2

// let number="287152";

// let copy_no=number;

// let digit_count=0;

// let sum=0;

// while(copy_no > 0){
//     copy_no = Math.floor(copy_no/10);
//     digit_count++;
// }

// console.log("Number count", digit_count);

// for(let i=0; i<digit_count; i++){
//     console.log(number[i]);
//     sum=sum+parseInt(number[i]);
// }

// console.log("The total sum is: ", sum)


// let tem=0;
// for(let i=0; i<=number.length;i++){
//     tem=tem+parseInt(number[i]);
//     console.log(parseInt(number[i]));
// }




// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1


// let num1=prompt("Enter the num that you wants the factorial");
// let num=num1;
// let fact=1;

// for(num; num>0; num--){
//     fact = fact * num;
// }

// console.log("the factorial of ", num1 +  " is", fact);



// Qs5. Find the largest number in an array with only positive numbers.


// let arr=[1,2,5,8,9,2,7,6];

// for(let i=0; i<arr.length;i++){
//     for(let j=i+1; j<arr.length;j++){
//         if(arr[j]>arr[i]){

//             let temp= arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }

// console.log("largest number in the string",arr[0]);



// let todo=[];

// let ans=prompt("Enter the your choice like quit app, add items, delete items and check the list");

// while (true) {

//     if(ans == "quit"){
//         break;
//     }

//     if(ans =="list"){
//         console.log("==========================");
//         for(let i=0; i<todo.length;i++){
//             console.log(i, todo[i]);
//         }
//         console.log("==========================");
//     }
//     if(ans=="add"){     
//         let task= prompt("Add your task in the list");
//         todo.push(task);
//     }

//     if(ans=="delete"){     
//         let idx= prompt("enter you index no for delete item");
//         todo.splice(idx,1);
//     }

    
//     ans=prompt("Enter the your choice again like quit app, add items, delete items and check the list");
// }


// let num=5;

// for(let i=1; i<=5; i++){
//     let temp= '';
//     for(let j=0; j<=5; j++){
//         temp= temp + j;
//     }
//     console.log(temp);
// }


// let num=5;

// for(let i=1; i<=5; i++){
//     let temp= '';
//     for(let j=1; j<=i; j++){
//         temp= temp + "*";
//     }
//     console.log(temp);
// }



// let arr=[2,5,10,4,2,7,1,9];
// let largest = 0;
// for(let i=0;i<arr.length;i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }

// console.log(largest)



// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+"*";
//     }
//     console.log(str);
// }

// o/p:

// *
// **
// ***
// ****


// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+String.fromCharCode(64+i);
//     }
//     console.log(str);
// }

// A
// BB
// CCC
// DDDD
// EEEEE

// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+String.fromCharCode(64+j);
//     }
//     console.log(str);
// }

// A
// AB   
// ABC  
// ABCD 
// ABCDE


// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+ i;
//     }
//     console.log(str);
// }

// 1
// 22   
// 333  
// 4444 
// 55555


// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+ j;
//     }
//     console.log(str);
// }

// 1
// 12
// 123
// 1234
// 12345
// let no=5;
// for(i=no; i>=1; i--){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+"*";
//     }
//     console.log(str);
// }


// *****
// ****
// ***
// **
// *



// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(k=no-i; k>=1; k=k-1){
//         str=str+" ";
//     }
//     for(j=1; j<=i; j++){
//         str=str+"*";
//     }
   
//     console.log(str);
// }


//    *
//   **
//  ***
// ****



// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(k=no-i; k>=1; k=k-1){
//         str=str+" ";
//     }
//     for(j=1; j<=i; j++){
//         str=str+"* ";
//     }
   
//     console.log(str);
// }


//     * 
//    * * 
//   * * *
//  * * * *
// * * * * *


// let no=5;
// for(i=1; i<no+1; i++){
//     let str="1 ";
//     for(k=no-i; k>=1; k=k-1){
//         str=str+" ";
//     }
//     for(j=1; j<=i; j++){
//         str=str+"* ";
//     }
   
//     console.log(str);
// }

// 1     *
// 1    * *
// 1   * * *
// 1  * * * *
// 1 * * * * *


// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(k=no-i; k>=1; k=k-1){
//         str=str+" ";
//     }
//     for(j=1; j<i+1; j++){
//         str=str+"*";
//     }
//     for(m=2; m<=i; m++){
//        str=str+"*";
//     }
//     console.log(str);
// }

//     *
//    ***
//   *****
//  *******
// *********




// const student={
//     name: "Sudarshan",
//     age: 23,
//     marks: 94,
// };

// const cars={
//     name: "Toyota",
//     Mode: 315,
//     color: "Red",
// };

// console.log(cars);


// let num=parseInt(prompt("Enter the number"));

// let random_no=Math.floor(Math.random()*num)+1;
// console.log(random_no);


// while(true){
//     let num2=parseInt(prompt("guess the numbeer"));

//     if(random_no===num2){
//         console.log("Gess number is correct");
//         break;
//     }
// }


// let number = 287152;
// let sum = 0;
// let copy = number;
// while(copy > 0) {
//     digit = copy % 10;
//     sum+= digit;
//     console.log(digit);
//     copy = Math.floor(copy/10);
// }
// console.log(sum);


// let arr=[1];
// if(arr.length >0){
//     console.log("item is exist")
// }
// else{
//     console.log("empty arr");
// }



// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+ String.fromCharCode(64 + j);
//     }
//     console.log(str);
// }

// A
// AB   
// ABC  
// ABCD 
// ABCDE




// let no=5;
// for(i=1; i<no+1; i++){
//     let str=" ";
//     for(j=1; j<=i; j++){
//         str=str+ j;
//     }
//     console.log(str);
// }



// let a = prompt("Enter first number to add");
// console.log(a);

// let b = prompt("Enter second number");
// console.log(b);

// console.log(a+b);
// console.log(a+b);



// =============Poem print function=================


// function poem(){
//     console.log("Twinkle twinkle little star how i wonder");
// };

// poem();
// poem();
// poem();


// function dies(){
//     let num=Math.floor(Math.random() * 6)+1;
//     console.log(num);
// };

// dies();


// function avg(a,b,c){
//     let Result=a+b+c/3;
//     return Result;
// };

// let n=avg(2,2,2);
// console.log(n);


// function mul(num){
//     for(let i=1; i<=10; i++){
//         console.log(i*num);
//     }
// };

// let no = prompt("Enter the number that you want mul table");
// mul(no);



// function sum(num){
//     let total=0;
//     for(let i=1; i<=num; i++){
//         total = total + i;
//     }
//     return total;
// };

// let no = prompt("Enter the number that you want mul table");
// console.log(sum(no));


// let arr=["sudarshan","Sagar","Patil"];

// function conCat(arr){
//     let str="";
//     for(i=0; i<arr.length; i++){
//         str=str+arr[i];
//     }
//     return str;
// };

// console.log(conCat(arr));



// let i,j;
//  for(i=1;i<=5;i++){
//             for(j=1;j<=i;j++){
//                 console.log(j);
//             }
//             document.("<br/>")

//         }



// a=24;  //Globla Variable scoope


// {
//     let a=25;  //Block scope 
//     console.log(a); // 25
// }

// function hello(){
//     // let a=26;
//     console.log(a); // Function scope
// }


// console.log(a);


// hello();



// function outer(){
//     let a=5;
//     let b=6;
//     function inner(){
//         console.log(a);
//         console.log(b);
//         let c=26; // Laxical Scope
//         console.log(c);
//     }
    

//     console.log(b);
    
//  inner();
// }


// outer();






// =====================Function Expressions====================================


// let add=function(a,b){
//     return a+b;
// };

// let a=add(1,3);
// console.log(a);



// =====================Higher order functions====================================

// it mean pass argument as a function 

// function greatting(func , num){
//     for(let i=1; i<=num; i++){
//         func();
//     }
// }


// let hello = function(){
//     console.log("Welcome to my terminal");
// }

// let num = prompt("Enter no how much type you want to print hellow");
// greatting(hello, num);



// =======================================Method of Function : action perform as an object=====================

// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     }
// };

// console.log(calculator.add(1,3));
// console.log(calculator.sub(1,3));




// =======================================Method shorthand=====================

// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// };

// console.log(calculator.add(1,3));
// console.log(calculator.sub(1,3));


// ==============================================Assignment of Javascript ps 6=====================



// Qs1. Write a JavaScript function that returns array elements larger than a number.


// let arr=[1,2,3,4,5,6,7,8,9,10];

// let num= prompt("Enter the number");

// function checkGreter(arr, num){
//     let arr1=[];                         // This arr for store a greater numbers

//     for(let i=1; i<=arr.length;i++){
//         if(arr[i]>num){
//             arr1.push(arr[i]);
//         }
//     }

//     return arr1;
// };


// let output=checkGreter(arr,num);
// console.log(`This number is greter than ${num}`,output);





// function unicode(str){
//     let str2="";
//     for(i=1;i<=str.length;i++){
//         for(j=i+1; j<=str.length;j++){
//             if(!(str[i]==str[j])){
//                 str2=str2+str[j];
//             }
//         }
//     }
//     return str2;
// };

// let str1="abcdabcdefgggh";
// console.log(unicode(str1));


// str="abcdabcdefgggh";
// let arr=[];
// for(let i=0; i<str.length;i++){
//     arr.push(str[i]);
// }

// console.log(arr);

// for(let i=0; i<arr.length;i++){
//     arr.indexOf(arr[i]);
//     for(let j=i+1; j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1)
//         }
//     }
// }



// str="abcdabcdefgggh";

// let ans="";
// for(let i=0; i<str.length;i++){
//     let char=str[i];
//     if(ans.indexOf(char)==-1){
//         ans=ans+str[i];
//     }
// }
// console.log(ans);


// function getuniqestring(str){
//     let ans="";
//     for(let i=0; i<str.length;i++){
//         let char=str[i];   //  a  b  c  d  a  b  c  d
//         if(ans.indexOf(char)==-1){  ans[a]==-1  ans[b]==-1  ans[c]==-1
//             ans=ans+str[i];  //" 0"
//         }
//     }
//     return ans
// }


// let str1="abcdabcdefgggh";

// console.log("shortest string",getuniqestring(str1));






// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"



// function lonContryName(arr){
//     let str="";
//     let count=0;
//     for(let i=0; i<arr.length;i++){
//         let a=arr[i].length;
//         let b=arr[i];
//        if(count < a){
//          count=a;
//          str=b;
//        }
//     }
//     return str;
// }

// let country = ["Australia", "Germany", "United States of America"]

// console.log(lonContryName(country));









// function getVowels(string){
//     count=0;
//     str=""
//     for(char of string){
//         if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
//             count+=1;
//             str=str+char;
//         }
//     }
//     console.log("Here are the vowels: ", str);
//     return count;

// }

// let str="apnacollege";

// console.log("The count of Vowels is ", getVowels(str));



// Qs5. Write a JavaScript function to generate a random number within a range (start,
//     // end).


// let randNumber=function(a,b){
//     let diff=b-a;
//    let num=Math.floor(Math.random()*diff)+a;
//    return num; 
// }
// let start=100;
// let end=105;

// console.log(randNumber(start, end));






// =======================================Arrow Function==================================

// let sqr = (num) =>{
//     return num*num;
// }

// console.log(sqr(2));



// let id = setInterval(()=>{
//     console.log("hello");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);



// for (let num = 1; num <= 10; num++) {
//       setTimeout(() => {
//         console.log(num*2);
//       }, num * 2000);
//     }


// 2   // num*2000  : 1*2000 //2000 2s
// 4   // num*2000  : 2*2000 //4000 4s
// 6   // num*2000  : 3*2000 //6000 6s
// 8   // num*2000  : 4*2000 //8000 8s
// 10   // num*2000  : 5*2000 //10000 10s
// 12   // num*2000  : 6*2000 //12000 12s
// 14   // num*2000  : 7*2000 //14000 14s
// 16   // num*2000  : 8*2000 //16000 16s
// 18   // num*2000  : 9*2000 //18000 18s
// 20   // num*2000  : 10*2000 //20000 20s




// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.


// let arrayAverage = (arr)=>{
//     total=0;
//     count=0;
//     for(num of arr){
//         total=total+num;
//         count++;
//     }
//     avg= total/count;
//     return avg;
// }


// let arr=[1,2,3,4,5,6,7,8,9,10];
// let Result=arrayAverage(arr);
// console.log("The Average of this arr is :", Result);




// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.


// let isEven=(num)=>{
//     if(num%2==0){
//         console.log("The Number is Even :", num);
//     }
//     else{
//         console.log("The Number is odd :", num);
//     }
// };

// let num= prompt("Enter the number: ");
// isEven(num);




// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//     console.log(this.message);
//     }
//  };

// setTimeout(()=> {object.logMessage}, 2000);


// let length = 4;

// function callback() {
//     console.log(this.length);
//     }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//         },
// };

// object.method(callback, 1, 2);

// for(i=1;i<=7;i++){
//     let str=" ";
//     for(j=1;j<=7;j++){
//         if(i==1 || i==7){
//             str=str+"* ";
//         }
//         else{
//             if(j==1 || j==7){
//                 str=str+"* ";
//             }
//             else{
//                 str=str+"  ";
//             }
//         }
//     }
//     console.log(str);
// }


// * * * * * * *
// *           *
// *           *
// *           *
// *           *
// *           *
// * * * * * * *




// for(i=1;i<=7;i++){
//     let str=" ";
//     for(j=1;j<=7;j++){
//         if(i==1 || i==7){
//             str=str+"* ";
//         }
//         else{
//             if(j==1 || j==7){
//                 str=str+"* ";
//             }
//             else if(i==4 && j==4){
//                 str=str+"* "
//             }
//             else{
//                 str=str+"  ";
//             }
//         }
//     }
//     console.log(str);
// }


// * * * * * * * 
// *           * 
// *           *
// *     *     *
// *           *
// *           *
// * * * * * * *






// for(i=1;i<=7;i++){
//     let str=" ";
//     for(j=1;j<=7;j++){
//         if(i==1 || i==7){
//             str=str+"* ";
//         }
//         else{
//             if(j==1 || j==7){
//                 str=str+"* ";
//             }
//             else if(i==4){
//                 str=str+"* "
//             }
//             else{
//                 str=str+"  ";
//             }
//         }
//     }
//     console.log(str);
// }



// * * * * * * * 
// *           * 
// *           *
// * * * * * * *
// *           *
// *           *
// * * * * * * *





// for(i=1;i<=7;i++){
//     let str=" ";
//     for(j=1;j<=7;j++){
//         if(i==1 || i==4 || i==7){
//             str=str+"* ";
//         }
//         else{
//             if(j==1 || j==7 || j==4){
//                 str=str+"* ";
//             }
//             else{
//                 str=str+"  ";
//             }
//         }
//     }
//     console.log(str);
// }



// * * * * * * * 
// *     *     * 
// *     *     *
// * * * * * * *
// *     *     *
// *     *     *
// * * * * * * *





// for(i=1;i<=7;i++){
//     let str=" ";
//     for(j=1;j<=7;j++){
//         if(i==1 || i==7){
//             str=str+"* ";
//         }
//         else{
//             if(j==1 || j==7 || j==4){
//                 str=str+"* ";
//             }
//             else{
//                 str=str+"  ";
//             }
//         }
//     }
//     console.log(str);
// }


// * * * * * * * 
// *     *     * 
// *     *     *
// *     *     *
// *     *     *
// *     *     *
// * * * * * * *



// const object={
//     message: 'hello,world',
//     logMessage(){
//         console.log(this.message)
//     }
// };
// setTimeout(()=>{object.logMessage()},1000);




// let obect={
//     name: "sudarshan",
//     age:24,
//     get: function(){
//         console.log(this.name);
//         setTimeout(()=>{
//             console.log("Nested settime", this.name); 
//         },2000)
//     },
// }

// obect.get();



// let arr=[1,2,3,4,5,6];
// let arr2=[];
// arr.forEach((arr)=>{
//     arr2.push(arr);
//     console.log(arr);
// });


// console.log(arr2);


// let arr=[1,2,3,4,5,6];

// let arr2=arr.map((num)=>{
//     return num
// });


// let arr=[1,2,3,4,5,6];


// // function myfunc(num){
// //     return num;
// // }

// console.log(arr.forEach);



// let arr=[1,2,3,4,5,5,5,5,5];

// let count=arr.filter((el)=>{
//     if(el!=5){
//        return el;
//     }

// })

// console.log(count);
 


// let arr=[1,2,3,4,5,5,5,5,5];
// let arr2=[];
// for(items of arr){
//     if(items !=5){
//         arr2.push(items);
//     }
// }

// console.log(arr2);




// let arr=[5,5,5,5,4];

// let Result=arr.every((el)=>el==5);

// console.log(Result);



// let arr=[5,5,5,5,5];

// let Result=arr.some((el)=>el==5);

// console.log(Result);



// let arr=[5,5,5,5,5];

// let Result=arr.reduce((sum, item)=>sum+item);

// console.log(Result);



// let arr=[5,5,5,5,5,6,7,8];

// let Result=arr.reduce((min, item)=>{

//     if(min > item){
//         return min;
//     }
//     else{
//         return item;
//     }
// });

// console.log(Result);





// Qs1.Square and sum the array elements using the arrow function and then find the average of the array.


// let arr=[1,2,3,4,5,6,7,8,9,10];

// const Result = arr.map((el)=>el*el);

// console.log(Result);

// let a=Result.reduce((sum,item)=>sum+item);

// console.log(a);

// let avg=a/Result.length;

// console.log("The Avarage or the arr is :",avg);



// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.



// let arr=[2,3,4,5,1,4];

// let newArr=arr.map((el)=>el+5);

// console.log(newArr);


// Qs3.Create a new array whose elements are in uppercase of words present in the original array.

// let str=["Sagar", "Sudarshan", "Patil"];

// let newString= str.map((str)=>str.toUpperCase());

// console.log(newString);


// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled



const doubleAndReturnArgs=(arr , ...args)=>[...arr , ...args.map((arg)=>arg*2)]


let a=doubleAndReturnArgs([1,2,3],4,5);
console.log(a);



// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and secondobject


// let mergeObjects=(obj1 , obj2)=>({...obj1 , ...obj2});

// let student={
//     name:"Sagar",
//     age:24,
//     marks: 72
// }


// let student2={
//     name2:"Sagar2",
//     age1:25,
//     marks2: 72,
//     handwritting: "Good"
// }

// let result = mergeObjects(student , student2);

// console.log(result);



