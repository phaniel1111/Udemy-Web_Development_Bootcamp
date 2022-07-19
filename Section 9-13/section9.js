//Coding Exercise 2: Javascript Variables
function test() {
    var a = "3";
    var b = "8";
    var temp = a;
    a = b;
    b = temp;
    console.log("a is " + a);
    console.log("b is " + b);
}

//Coding Exercise 3: Life in Weeks Coding
function lifeInWeeks(age) {
    var x = (90 - age) * 365;
    var y = (90 - age) * 52;
    var z = (90 - age) * 12;
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}

//Coding Exercise 4: BMI Calculator Challenge
function bmiCalculator(w, h) {
    return Math.round(w / (h * h));
}

