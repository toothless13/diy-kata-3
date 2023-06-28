const numberToReversedDigits = (number) => {
  if (typeof number !== "number") {
    return "Please enter a number";
  }

  const numArr = Array.from(String(number), (element) => Number(element));

  return numArr.reverse();
};

module.exports = numberToReversedDigits;
