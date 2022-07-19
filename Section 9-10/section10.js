//Coding Exercise 5: BMI Calculator Advanced (IF/ELSE)

function bmiCalculator(weight, height) {
    var interpretation = weight / (height * height);
    if (interpretation < 18.5) {
        return "Your BMI is " + interpretation + ", so you are underweight.";
    }

    if (interpretation >= 18.5 && interpretation <= 24.9) {
        return "Your BMI is " + interpretation + ", so you have a normal weight.";
    }
    if (interpretation > 24.5) {
        return "Your BMI is " + interpretation + ", so you are overweight.";
    }
    return interpretation;
}

//Coding Exercise 6: Leap Year Challenge
function isLeap(year) {
    if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
        return "Not leap year.";
    }
    return "Leap year.";
}

//Coding Exercise 7: Who's Buying Lunch? Code
function whosPaying(names) {
    var randomPerson = names[Math.floor(Math.random() * names.length)]
    return randomPerson + " is going to buy lunch today!"
}

//Coding Exercise 8: The Fibonacci Exercise
function fibonacciGenerator(n) {
    var fib = [];

    if (n === 0)
        return fib;

    if (n === 1 || n === 2) {
        fib.push(0);
        if (n === 2) {
            fib.push(1)
        }
        return fib;
    }

    fib.push(0);
    fib.push(1);
    for (var i = 2; i < n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib;
}
