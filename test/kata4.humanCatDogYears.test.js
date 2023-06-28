const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
    it("returns an array of human, cat, and dog years", () => {
        expect(humanCatDogYears(0)).toStrictEqual([0, 0, 0]);
        expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    });

    it("returns false if a number is not passed", () => {
        expect(humanCatDogYears("dog")).toBe(false);
    });
});