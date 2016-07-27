
///////////////////////////////
// --- Generic Example 1 --- //
///////////////////////////////

// Create the fridge object
var fridge = {

  // Assign basic info with key/value pairs
  brand: 'Samsung',
  model: 'SMGX202',
  poweredOn: 1,
  food: ['apple', 'orange', 'banana'], // Array

  // Assign methods
  getFoodCount: function() {
    // Use the native array property length to count
    // the total food items. Notice no parentheses
    // because this is a property, not a method.
    return this.food.length;
  },

  getFood: function(index) {
    // "this" refers to the current object
    // context which is the fridge
    return this.food[index];
  },

  getAllFood: function() {
    return this.food;
  },

  addFood: function(newFood) {

    // Check the passed parameter (arg) as an array.
    // Note: This is test is newer and available only
    // in modern browsers. (Go home IE8, you're drunk.)
    if (Array.isArray(newFood)) {

      // newFood parameter (arg) is an array. Set the current
      // length before iterating each item into our fridge.
      var currentFoodLength = this.food.length;

      // Loop over the newFood array and start adding items.
      for(i = 0; i < currentFoodLength; i++) {
        this.food.push(newFood[i]);
      }

    } else {
      // Add the single item to our fridge.
      this.food.push(newFood);
    }
  },

  removeFood: function(index) {
    // Check to make sure we have food in the fridge with
    // length property. If not, warn them. Remove item from
    // an array by passing desired index parameter (arg)
    // to the native array method splice().
    if (this.food.length > 1) {
      this.food.splice(index, 1);
    } else {
      console.log("There is no spoon. I mean food."); // Matrix reference, anyone?
    }
  },

  emptyFood: function() {
    this.food = [];
  }

};




