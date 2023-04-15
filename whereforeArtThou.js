/**
 * Make a function that looksthrough an array of objects(first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * 
 * For example, if the first arguments is [{first: "Romeo", last:"Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { lase: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Problem Explanation
//Write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties and values in the Object passed as second parameter.

//Hint 1: You may use for loop or the Array.prototype.filter method.
//Hint 2: Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object(as its own property).
//Hint 3: Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.

//Solution 1:
function whatIsInAName(collection, source) {
    //"What's in a name? that which we call a rose 
    //By any other name would smell as sweet."
    // -- by William Shakespeare, Romeo and Juliet
    const sourceKeys = Object.keys(source);

    // filter the collection
    return collection.filter(obj => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!obj.hasOwnProperty(sourceKeys[i]) ||
            obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

// test here
whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  );

  /**
   * Code Explanation
   * 1. We filter through the array using.filter().
   * 2. Using a for loop we loop through each item in the object.
   * 3. We use a if statement to check if the ibject in the collection doesn't have the key and thr property value doesn't mathch the value in source.
   * 4. We return false if the above if statement is correct. Otherwise, we return true;
   */

  //Solution 2
  function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
  }
  /**
   * Code Explanation
   * 1. We filter through the collection using .filter().
   * 2. Next, we return a Boolean value for the .filter() method.
   * 3. Finally, we reduce to Boolean value to be returned for the .every() method.
   */

  //Solution 3
  function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    //filter the collection
    return collection.filter(obj => sourceKeys
        .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
        .reduce((a, b) => a && b))
  }
  /**
   * Code Explanation
   * 1. We start by filtering through collection using Array.filter().
   * 2. Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
   * 3. Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
   * 4. This single Boolean will be used to filter through the collection.
   */

  // Solution 4
  function whatIsInAName (collection, source) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        let found = true;
        for (const sourceProp in source) {
            if (collection[i][sourceProp] !== source[sourceProp]) {
                found = false;
                break;
            }
        }
        if (found) arr.push(collection[i]);
    }
    return arr;
  }
