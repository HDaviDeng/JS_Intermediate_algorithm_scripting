/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * 
 * In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
 * 
 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
 * 
 * Remember, you can access object properties through either dot notation or [] notation.
 * 
 * 
 * Problem Explanation:
 * The program needs to check if the second argument is a truthy element, and it must check this fro each object in the first argument.
 * 
 * 
 * Hint 1: Remember to iterate through the first argument to check each object.
 * 
 * Hint 2: Only if all of them are truthy will we return true, so make sure all of them check.
 * 
 * Hint 3: You could use loops or callback functions, there are multiple ways to solve this problem.
 */

//Solution 1 (Using for-in loop & hasOwnProperty)
function truthCheck(collection, pre) {
    //Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}
/**
 * First I create a counter to check how many cases are actually true.
 * Then check for each object if the calue is truthy
 * Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false.
 */

//Solution 2 (Using Array.every())
function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}
//Use the native "every" method to test whether all elements in the array pass the test.

//Solution 3
function truthCheck(collection, pre) {
    //Is everyone being true?
    return collection.every(obj => obj[pre]);
}
/**
 * For every object in the collection array, check the truthiness of object's property passed in pre parameter
 * Array.prototype.every method internally checks if the calue returned from the callback is truthy.
 * Return true if it passes for every object. Otherwise, return false.
 */
