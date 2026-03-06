import { test, expect } from "@playwright/test";

test.describe("Verift test cases", () => {
  test.beforeAll(() => {
    console.log("Welcome!");
  });

  test.beforeEach(() => {
    console.log("hello");
  });

  test.afterEach(() => {
    console.log("Thank you");
  });

  test.afterAll(() => {
    console.log("GOOD BYE!");
  });

  test("Test case 1", () => {
    console.log("Test Case 1");
  });

  test("Test case 2", () => {
    console.log("Test Case 2");
  });

  test("Test case 3", () => {
    console.log("Test Case 3");
  });

  test("Test case 4", () => {
    console.log("Test Case 4");
  });
});
