import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("test utils module", () => {
  test("getFullYear returns the correct year", () => {
    expect(getFullYear()).toEqual(2023);
  });

  test("getFooterCopy return the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  test("getFooterCopy return the correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  test("getLatestNotification return the correct string", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
