//Problem 1:
const olderThan = (userAge) => {
    return userAge > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
}
console.log(olderThan(23)) //Output : You are good to go!
console.log(olderThan(2)) //Output : Sorry! You must be 18 or older!"

//Problem 2:
const isRaining = (value) => {
    return value === true? "Get your rain jacket!" : "No rain on today's forcast"
}
console.log(isRaining(true))//Output : Get your rain jacket
console.log(isRaining(false))//Output : No rain on today's forcast

//Problem 3:
const isEven = (num) => {
    return num % 2 === 0?  "That's an even number!" : "That's an odd number!"
}
console.log(isEven(1))//Output : That's an odd number!
console.log(isEven(2))//Output : That's an even number!

//Problem 4:
const isGreater = (num1, num2) => {
    return num1 > num2? num1 + " is more than " + num2 + "!" 
    : num1 + " is less than " + num2 + "!"
}
console.log(isGreater(2, 1))//Output : is more than
console.log(isGreater(1, 2))//Output : is less than