import { test, expect } from "@playwright/test";

test.describe("Verift test cases", () => {
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

//===================================================================

test.describe("Verift test cases for ONLY", () => {
  test.only("Test case 5", () => {
    console.log("Test Case 1");
  });

  test("Test case 6", () => {
    console.log("Test Case 2");
  });
});

//===================================================================

test.describe("Verift test cases for SKIP", () => {
  test.skip("Test case 7", () => {
    console.log("Test Case 1");
  });

  test("Test case 8", () => {
    console.log("Test Case 8");
  });
});

//===================================================================

test.describe("Verift test cases for SLOW", () => {
  test.slow();
  test("Test case 9", () => {
    console.log("Test Case 9");
  });
});

//===================================================================

test.describe("verify test cases for FAIL", () => {
  test.fail();
  test("Test case 10", () => {
    console.log("Test Case 10");
    expect(5).toBe(6);
  });
});

//===================================================================

test.describe("Verift test cases for FIXME", () => {
  test.fixme();
  test("Test case 11", () => {
    console.log("Test Case 11");
  });
});
