# Playwright Test Framework

# Grouping

# Annotations

# Hooks

1. Grouping

// Used to group the test cases for debugging or running purpose

test.describe("\_\_\_\_", () =>{
test1
test2
test3...
})

2. Annotations

// We have 5 types in playwright

1. test.only -> to select test cases that should run.
2. test.skip -> to skip any particular test case
3. test.slow() -> to slow down the execution for particulat test by x3 times
4. test.fail() -> if we want a test case to fail, so final result shows pass
5. test.fixme() -> to skip the test case, but fix it later

6. HOOKs

// We have 4 types of hooks in playwright

1. test.beforeEach()
2. test.afterEach()
3. test.beforeALl()
4. test.afterAll()

// when we write this, order doesnt matter always executes beforeALL, beforeEach, afterEach, afterALl order only
