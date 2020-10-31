
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = `Designer`
let futureCity = `Toronto`
let annualSalary = 50000
let companyName = `Taxi`

console.log(`You will be a ${jobTitle} in ${futureCity}, making $${annualSalary} for ${companyName}.`)

let ex1 = document.querySelector(`#ex1`)
ex1.textContent = (`You will be a ${jobTitle} in ${futureCity}, making $${annualSalary} for ${companyName}.`)



//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = 2020
let birthYear = 1990
let currentAge = currentYear - birthYear

console.log(`They are ${currentAge} years old.`)

let ex2 = document.querySelector(`#ex2`)
ex2.textContent = `They are ${currentAge} years old.`




//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let nowAge = 33
let maxAge = 75
let amountperDay = 3
let totalAmount = amountperDay * 365 * maxAge - nowAge

console.log(`You will need ${totalAmount} Mentos spheroid to last you until the ripe old age of ${maxAge}.`)

let ex3 = document.querySelector(`#ex3`)
ex3.textContent = `You will need ${totalAmount} Mentos spheroid to last you until the ripe old age of ${maxAge}.`


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
 
let circleRadius = 5
let piValue = 3.14
let circumferenceCircle = 2 * piValue * circleRadius
let circleArea = piValue * circleRadius ** 2

console.log(`The circumference is ${circumferenceCircle} and The area is ${circleArea}`)

let ex4 = document.querySelector(`#ex4`)
ex4.textContent = `The circumference is ${circumferenceCircle}, and The area is ${circleArea}`



//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsTemp = 29
let fahreValue = 32
let fahreTemp = fahreValue * 9/5 + celsTemp

console.log(`${celsTemp}°C is ${fahreTemp}°F, and ${fahreTemp}°F is ${celsTemp}°C.`)

let ex5 = document.querySelector(`#ex5`)
ex5.textContent = `${celsTemp}°C is ${fahreTemp}°F, and ${fahreTemp}°F is ${celsTemp}°C.`


// LAB 2


// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num){
    return num ** 2 
}
console.log(`The square root of the number is: ${squareNumber(8)}.`)

let ex6 = document.querySelector(`#ex6`)
ex6.textContent = `The square root of the number is: ${squareNumber(8)}.`


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(numb){
    return numb / 2 
  }
  let numb = 7
  console.log(`Half of ${numb} is ${halfNumber(7)}.`)

let ex7 = document.querySelector(`#ex7`)
ex7.textContent = `Half of ${numb} is ${halfNumber(7)}.`


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(number){
    return number / secondNum * 100
}
let number = 25
let secondNum = 50

console.log(`${number} is ${percentOf(number)}% of ${secondNum}.`)

let ex8 = document.querySelector(`#ex8`)
ex8.textContent = `${number} is ${percentOf(number)}% of ${secondNum}.`

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(circleRad){
    return pi * circleRad ** 2
}
let circleRad = 6
let pi = 3.14

console.log(`The area for a circle with radius ${circleRad} is ${areaOfCircle(circleRad)}.`)

let ex9 = document.querySelector(`#ex9`)
ex9.textContent = `The area for a circle with radius ${circleRad} is ${areaOfCircle(circleRad)}.`

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll(z){ 
}
let z = 18
let a = halfNumber(z)
let b = squareNumber(a)
let c = areaOfCircle(b)
let d = percentOf (c) / areaOfCircle (b) 

console.log(`Half of ${(z)} is ${a}, square of ${a} is ${b}, area of circle with a radius of ${b} is ${c}, and ${d} is ${c}% of ${b}.`)

let ex10 = document.querySelector(`#ex10`)
ex10.textContent = `Half of ${(z)} is ${a}, square of ${a} is ${b}, area of circle with a radius of ${b} is ${c}, and ${d} is ${c}% of ${b}.`

// I know the last part is wrong because I'm very bad with math and I came up with this from some of my peers examples and googled how to do calculations. I sincerely apologize for that.