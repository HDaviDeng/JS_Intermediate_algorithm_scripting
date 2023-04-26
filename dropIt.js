/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 * 
 * 
 * Problem Explanation:
 * Basically while the second argument is not true, you will hava to remove the first element from the left of the array that was passed as the first argument.
 * 
 * 
 * Hint 1: You can use Array.prototype.shift() or filter that you should be more familiar with to solve this problem in a few lines of code.
 * 
 * Hint 2: Shift returns the element that was removed which we don't really need, all we need is the modified array that is left.
 * 
 * Hint 3: If you still can't figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar with it, then you can make the code with shift.
 */

//Solution 1
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n){
    return n >= 3;
});
/**
 * Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
 * Return the filtered array.
 */

//Solution 2
function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
/**
 * Use ES6 findIndex() function to find the index of the element that passes the condition.
 * Slice the array from the found index until the end.
 * There is one edge case! if the condition is not met against any of the elements 'findIndex' will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.
 */

//Solution 3
function dropElements(arr, func) {
    // drop them elements.
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}
// test here
dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
  /**
   * Create a for loop to check each element.
   * Then check for the function given if true then stop, otherwise remove that element.
   * return the array.
   */

//Solution 4
function dropElements(arr, func) {
return arr.length > 0 && !func(arr[0])
    ? (dropElements(arr.slice(1), func))
    : arr;
}
// test here
dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
// Use recursion to solve the challenge.