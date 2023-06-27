const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("returns 'Yes' when true is passed", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  it("returns 'No' when false is passed", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
