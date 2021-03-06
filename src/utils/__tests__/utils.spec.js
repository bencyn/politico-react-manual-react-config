import { isEmptyObject } from "..";

describe("isEmptyObject function tests", () => {
  test("should return true if empty object is passed", () => {
    expect(isEmptyObject({})).toBe(true);
  });
  test("should return false if non-empty object is passed", () => {
    expect(
      isEmptyObject({
        data: {}
      })
    ).toBe(false);
  });
});
