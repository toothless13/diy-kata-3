const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(20, 10)).toBe("I should be there in 2 hours.")
    expect(reachDestination(35, 6)).toBe("I should be there in 6 hours.")
    expect(reachDestination(1003, 27)).toBe("I should be there in 37.5 hours.")
  });
  it("returns false if arguments are not numbers", () => {
    expect(reachDestination('bob', false)).toBe(false);
  });
});
