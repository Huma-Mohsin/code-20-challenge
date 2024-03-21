// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// // Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!

function magic_box_adder(special_number: number) {
  //we  create a function,it takes a number as an input ,here shows a special number has number type of data.
  return function (number) {
    //nested function,this function takes a number from user and make it special, and shows output in console.
    return special_number + number; //this nested function works on input number given by user and make it a magic number.
  };
}
const Magic_Number_Inside_A_Box = magic_box_adder(20); //declaring a number that magic box hold bydefault.

//calling a function during log

console.log("Magic Box declared Special Number:", Magic_Number_Inside_A_Box(5));

//Author-HUMA MOHSIN
