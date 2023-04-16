//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

function spinalCase(str) {
    return str;
}
spinalCase('This Is Spinal Tap');

//Hint 1: Create a regular expression for all white spaces and underscores.
//Hint 2: You will also have to make everything lowercase.
//Hint 3: The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with dashes using replace().


//Solution 1
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    //Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])(A-Z)/g, "$1 $2");

    //Replace space and underscore with-
    return str.replace(regex, "-").toLowerCase();
}

/**
 * Code Explanation
 * 
 * regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
 * 
 * The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
 * 
 * While returning the string, another replace() replaces spaces and underscores with dashes using regex.
 */


//Solution 2
function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-");
}

/**
 * Code Explanation
 * 
 * Similar to the first solution, the first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
 * 
 * Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() on the regular expression /(?:_| )+/ and join()-ed on -.
 */


//Solution 3
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St.Hubbins

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

/**
 * Code Explanation
 * 
 * Split the string at one of the following conditions(converted to an array)
 * - a whitespace character [\s] is encountered
 * - underscore character[_] is encountered
 * - or is followed by an uppercase letter [(?=[A-Z])]
 * Join the array using a hyphen(-)
 * Lowercase the whole resulting string
 */