/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * 
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * 
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * 
 * Check the assertion tests for examples.
 */

//Problem Explanation: The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and there shouldn't be any duplicates.

/**
 * Hint 1: Since you have no idea how many parameters were passed, it would be best to loop through the arguments before looping through the arrays.
 * 
 * Hint 2: It isn't necessary to use loops. You can use functions such as map(), reduce() or others if you want.
 * 
 * Hint 3: You will have to check if the current value is already on the array to be returned for every value.
 */