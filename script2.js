// 2. Write code that prints all of the numbers from 1 to 100 with three exceptions: [1] For numbers that are divisible by 3, print “Fizz” instead of the number,  [2] for numbers that are divisible by 5, print “Buzz” instead of the number, and [3] for numbers that are divisible by both 3 and 5, print “FizzBuzz” instead of the number.
// Example output:
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz
// ...

// this program lists all numbers 1-100 and if the number is evenly divisible by 3, the word "Fizz" is shown instead of the number, and if the number is evenly divisible by 5, then "Buzz" gets added. And if its evenly divisible by both 3 and 5, "FizzBuzz" is shown.
for (let x = 1; x <= 100; x++) {
    if (x % 15 == 0) {
        console.log("FizzBuzz")
    } else if (x % 5 == 0) {
        console.log("Buzz");
    } else if (x % 3 == 0) {
        console.log("Fizz");
    } else console.log(x);
}