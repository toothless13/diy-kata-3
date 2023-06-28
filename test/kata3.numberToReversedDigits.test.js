const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12)).toStrictEqual([2, 1]);
    expect(numberToReversedDigits(123)).toStrictEqual([3, 2, 1]);
    expect(numberToReversedDigits(456445457)).toStrictEqual([
      7, 5, 4, 5, 4, 4, 6, 5, 4,
    ]);
    expect(numberToReversedDigits("Test")).toStrictEqual(
      "Please enter a number"
    );
  });
});
