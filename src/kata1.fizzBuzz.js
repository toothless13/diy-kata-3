const fizzBuzz = (number) => {
  const isDivisibleBy3 = number % 3 === 0;
  const isDivisibleBy5 = number % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    return "FizzBuzz";
  }
  if (isDivisibleBy3) {
    return "Fizz";
  }
  if (isDivisibleBy5) {
    return "Buzz";
  }
  return number;
};

module.exports = fizzBuzz;
