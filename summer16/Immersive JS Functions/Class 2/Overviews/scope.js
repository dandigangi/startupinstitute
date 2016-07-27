
// Global Variable
var baseValue = 1;

// Function
var adder = function() {

  // Contextual var to ONLY this function
  var myAdderCount = 0;

  // The arguments variable is hidden behind the scenes as
  // a parameter when you run the function.
  for (var i = 0; i < arguments.length; i++) {
    myAdderCount += arguments[i];
  }

  console.log(myAdderCount);
}

// Separate Addition
var newValue = baseValue + myAdderCount;
console.log(newValue);