
// Arrays
var myArray = ['Hello', 'Goodbye']; // Hello = index position 0; Goodbye = index position 1

// Parameter 1: i refers to the iterator and value to be counted against
// Parameter 2: The condition to run the loop until
// Parameter 3: What should be done at the end of each loop iteration
for (var i = 0; i < myArray.length; i++) {
  // Pass the current value of i (starting at 0) into the array to log
  // the current value. Don't forget arrays start counting at 0!
  console.log(myArray[i]);
}

// Objects
var myObject = {
  id: 1, //Integer
  exists: true, // Boolean
  value: "Meow" // String
}

// Setup the loop. Do NOT use on arrays.
for (anObject in myObject) {
  // Access the value by attaching the current iteration's
  // key to the parent object.
  console.log(myObject.anObject);
}