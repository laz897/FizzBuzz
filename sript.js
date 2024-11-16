for (let s = 1; s <= 100; s++) {
    if (s % 3 == 0 && s % 5 == 0) {
        console.log("FizzBuzz");
    } else if (s % 3 == 0) {
        console.log("Fizz");
    } else if (s % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(s);
    }
}