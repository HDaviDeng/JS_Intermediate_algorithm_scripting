/**
 * According to Kepler's Third Law, the orbital period T of two point masses orbiting eachother in a circular or elliptic orbit is: https://global.discourse-cdn.com/freecodecamp/original/3X/3/b/3b3831f4334b255f143b3b1cdb0656f41bd008df.png
 * T = 2π √(a3/µ)
 * 
 * a is the orbit's semi-major axis
 * µ = GM is the standard gravitational parameter
 * G is the gravitational constant,
 * M is the mass of the more massive body.
 * 
 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
 * 
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

/**
 * Problem Explanation
 * 
 * The first thing to do is to get familiar with waht the program is for by knowing what Orbital period exactly is. You've to return a new array that transforms the element's average altitude into their orbital periods. The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array; This is what is tested on the second part.
 * 
 * Hint 1: https://global.discourse-cdn.com/freecodecamp/original/3X/3/b/3b3831f4334b255f143b3b1cdb0656f41bd008df.png
 * T = 2π √(a3/µ)
 * 
 * Hint 2: Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.
 * 
 * Hint 3: Find out how to remove and add key to a JavaScript object.
 */