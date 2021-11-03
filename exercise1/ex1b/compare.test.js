const compare = require("./compare");
const { expectResultsCompare } = require("./__mock__");

describe("Test function compare", () => {
  test.each(expectResultsCompare)(
    "Test case $id",
    ({ arrayA, arrayB, duplicatedValues }) => {
      const result = compare(arrayA, arrayB);

      expect(result).toEqual(duplicatedValues);
    }
  );
});
