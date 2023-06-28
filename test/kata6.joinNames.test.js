const { joinNames } = require("../src");

describe("joinNames", () => {

  const names1 = [
    {
      name: "Marge"
    },
    {
      name: "Bart"
    },
    {
      name: "Lisa"
    }
  ];

  const names2 = [
    {
      name: "Marge"
    }
  ];

  const names3 = [
    {
      name: "Marge"
    },
    {
      name: "Bart"
    }
  ];

  const names4 = [
    {
      name: "Homer"
    },
    {
      name: "Marge"
    },
    {
      name: "Bart"
    },
    {
      name: "Lisa"
    },
    {
      name: "Maggie"
    }
  ];

  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(names1)).toBe("Marge, Bart & Lisa");
    expect(joinNames(names2)).toBe("Marge");
    expect(joinNames(names3)).toBe("Marge & Bart");
    expect(joinNames(names4)).toBe("Homer, Marge, Bart, Lisa & Maggie");
  });
});
