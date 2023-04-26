//Return an English translated sentence of the passed binary string. The binary string will be space separated.

//Explanation: This problem is very straight forward - you start with a string that represents a sentence in binary code, and you need to translate that into words. There is not a direct way to do this so you will have to translate twice.

/**
 * Hint 1: You should first convert from binary to decimal before translating those values into characters.
 * 
 * Hint 2: Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.
 * 
 * Hint 3: Make sure that each time you transcode a character from binary to decimal, you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.
 */

//Solution 1
function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];

    //Using the radix (or base) parameter in parseInt, we can convert the binary number to a decimal number while simulataneously converting to a char
    
    for (var i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i],2)));
    }

    //We then simply join the string
    return uniString.join("");
}
/**
 * Separate the string into an array of strings separated by whitespace.
 * Create some variables that you will use along the way - the names are self explanatory for the most part.
 * Iterate through each binary string in the new array.
 * Convert to decimal by using parseInt(_binar_, 2). Use the second parameter to specify the base of the input numbers.
 * At the end, return the converted message.
 */

//Solution 2
function binaryAgent(str) {
    // Separate the binary code by space.
    str = str.split(" ");
    var power;
    var decValue = 0;
    var sentence = "";

    // Check each binary number from the array
    for (var s = 0; s < str.length; s++) {
        // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
            // This only takes into consideration the active ones.
            if (str[s][t] == 1) {
                //This is quivalent to 2 ** position
                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power;

                // Record the decimal value by adding the number to the previous one.
            }
        }

        // Agfter the binary number is converted to decimal, convert it to string and store
        sentence += String.fromCharCode(decValue);

        // Reset decimal value for next binary number.
        decValue = 0;
    }

    return sentence;
}
/**
 * For each of these binary strings, check for the ones and ignore the zeroes.
 * For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
 * Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
 * Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
 * Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.
 */

//Solution 3
function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function(char) {
            return parseInt(char, 2);
        })
    );
}
/**
 * First we use split() to be able to work on each character as an Array element
 * Then use map() to process each element from binary to decimal using pareseInt()
 * Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
 * However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info;
 */


//Alternative Advanced Code Solution:
const binaryAgent = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));
/**
 * Find all groups of one or more digits followed by one other character
 * Replace with a string created from the specified sequence of UTF-16 code units
 * Use 0b to lead the code unit to express that a binary integer literal is being converted.
 */