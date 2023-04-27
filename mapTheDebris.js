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

//Solution 1
function orbbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = []

    const getOrbPeriod = function(obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        // create new object
        return {name: obj.name, orbitalPeriod: orbPeriod};
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}
/**
 * GM and earthRadius are both given to us.
 * To make the code easier to edit and read, each part of the equation is written separately.
 * Create newArr to store the orbPeriod's.
 * a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
 * Create a function, getOrbPeriod() that will do the required work for any amount of objects.
 * c is (earthRadius + avgAlt) to the cube.
 * b is the square root of c divided by GM.
 * Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
 * Then we delete the key avgAlt, and add the new key and its value.
 */

//Solution 2
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];
  
    //Looping through each key in arr object
    for (let elem in arr) {
      //Rounding off the orbital period value
      const orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

  /**
   * GM and earthRadius are both given to us.
   * A for..in loop is used to iterate through each value in given array arr.
   * orbitalPer holds the value of orbital period for each iteration calculated using the formula.
   * The key avgAlt is deleted, and orbitalPer found is assigned in arr.
   */

  //Solution 3
  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    // Create new array to prevent modification of the original
    const newArr = JSON.parse(JSON.stringify(arr));
    // Loop through each item in the array arr
    newArr.forEach(function(item) {
        //Calculate the Orbital period value
        const tmp = Math.round(
            2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
        );
        //Delete the avgAlt property
        delete item.avgAlt;
        //Add orbitalPeriod property
        item.orbitalPeriod = tmp;
    });

    return newArr;
  }
  /**
   * GM and earthRadius are both given to us.
   * The forEach() method is used to execute the function once per element(item) in arr.
   * tmp holds the value of orbital period for each element calculated using the formula.
   * The key avgAlt is deleted, and orbital period (tmp) found is assigned to the key orbitalPeriod.
   */

  //Solution 4
  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({name, avgAlt}) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
        return { name, orbitalPeriod };
    });
  }