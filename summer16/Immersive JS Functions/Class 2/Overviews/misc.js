
// Notice the following:
// -- No space between function and ()
// -- Space between () and {
// -- No semicolon after the last }
// -- Best way to name a function to a var
var doSomething = function() {
  // awesome code here
}

//////////////////////////
/// Control Statements ///
//////////////////////////

/// Control = If/Then
if (theSky == "blue") {
  if (theGrass == "green") {
    // awesome code here
  }
}

/// Refactored into shorthand AND (&&) statements
if (theSky == "blue" && theGrass == "green") {
  // awesome code here
}

/// Refactored into shorthand OR (||) statements
if (theSky == "blue" || theGrass == "green") {
  // awesome code here
}

/// Equal & Does Not Equal - Strings
if (theSky == "blue" || theGrass !== "blue") {

}

/// Return a Function Output to Control Statement
function personExists(personName) {
  if (personName == "Dan") {
    return true;
  } elseif (personName == "Bob") {
    return true;
  } else {
    return false;
  }
}

function sayHello(personName) {
  if (personExists(personName)) {
    alert("Hello " + personName);
  }
}

sayHello("Jerry");

/////////////////////////////////////////
/// Equal & Does Not Equal - Booleans ///
/////////////////////////////////////////
var isDay = true;
var isNight = false;

if (isDay && !isNight) {
  putOnSunglasses();
} else {
  turnOnLights();
}

//////////////////////////////
/// Writing Variable Names ///
//////////////////////////////

var car = "BMW"; // Single word, no caps.
var myCar = "BMW 330i"; // Standard naming practices for most variables you'll write (except below.)
var YourCar = !myCar; // Written OOP style for classes. Each word's first letter is capitalized.

// Line Breaks = No Bueno! Javascript's parser will add a semicolon to the end of the line.
/*
var myHTML = "<h1>
                 Hello World
              </h1>"; 
*/

///////////////////////////////////
//// Alternative to Line Breaks ///
///////////////////////////////////
var myHTML = "<h1>" +
                 "Hello World" +
              "</h1>";

// Single versus Double Quotes
var myClass = 'red';
var buttonHTML = "<button class='" + myClass + "'>Click Me</button>";

var buttonHTML = "<button class='red'>Click Me</button>"; // Notice the single quotes nested

var buttonHTML = "<button class=\"red\">Click Me</button>"; // Escaping double quotes within double quotes (backslash)






