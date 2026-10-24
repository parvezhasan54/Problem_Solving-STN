# STN-7 Problem Solving Assessment

All 20 solutions are in a single file: `solution.ts`.
The test cases are kept here in the README, not in the solution file.

## How to run the tests

1. Copy the code block below into a new file named `test.ts`, in the same folder as `solution.ts`.
2. Run:

```bash
npx tsc test.ts --target es2019 --module commonjs --strict
node test.js
```

Expected output: `Tests passed: 62, failed: 0`

> Note: the PDF example for Problem 20 says the answer is `"inter"`, but
> `["interspecies", "interstellar", "interstate"]` actually share `"inters"`,
> so the test expects `"inters"`.

## test.ts

```ts
import {
  staircase,
  gradingStudents,
  timeConversion,
  repeatStr,
  solution,
  positiveSum,
  summation,
  booleanToString,
  fizzBuzz,
  runningSum,
  maximumWealth,
  removeDuplicates,
  containsDuplicate,
  moveZeroes,
  merge,
  threeSum,
  plusOne,
  reverseString,
  lengthOfLastWord,
  longestCommonPrefix,
} from "./solution";

/* ========================================================================
 * TESTS
 * ===================================================================== */
let passed = 0;
let failed = 0;

function check(label: string, actual: unknown, expected: unknown): void {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    passed++;
  } else {
    failed++;
    console.log(
      `FAIL  ${label}\n   expected: ${JSON.stringify(expected)}\n   actual:   ${JSON.stringify(actual)}`
    );
  }
}

// 1
check("P1 n=4", staircase(4), "   #\n  ##\n ###\n####");
check("P1 n=1", staircase(1), "#");
// 2
check("P2 ex1", gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
check("P2 ex2", gradingStudents([84, 29, 57]), [85, 29, 57]);
check("P2 100", gradingStudents([100, 99]), [100, 100]);
// 3
check("P3 7PM", timeConversion("07:05:45PM"), "19:05:45");
check("P3 12AM", timeConversion("12:00:00AM"), "00:00:00");
check("P3 12PM", timeConversion("12:30:45PM"), "12:30:45");
check("P3 9AM", timeConversion("09:15:00AM"), "09:15:00");
// 4
check("P4 ha", repeatStr(3, "ha"), "hahaha");
check("P4 zero", repeatStr(0, "hello"), "");
check("P4 a", repeatStr(4, "a"), "aaaa");
// 5
check("P5 world", solution("world"), "dlrow");
check("P5 empty", solution(""), "");
// 6
check("P6 ex1", positiveSum([1, -4, 7, 12]), 20);
check("P6 none", positiveSum([-1, -2, 0, -5]), 0);
check("P6 empty", positiveSum([]), 0);
// 7
check("P7 8", summation(8), 36);
check("P7 1", summation(1), 1);
// 8
check("P8 true", booleanToString(true), "true");
check("P8 false", booleanToString(false), "false");
// 9
check("P9 n=5", fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
check("P9 n=15", fizzBuzz(15).slice(-1), ["FizzBuzz"]);
check("P9 n=0", fizzBuzz(0), []);
// 10
check("P10 ex1", runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
check("P10 ex2", runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
// 11
check("P11 ex1", maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);
check("P11 ex2", maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);
// 12
{
  const a = [1, 1, 2];
  const k1 = removeDuplicates(a);
  check("P12 ex1 k", k1, 2);
  check("P12 ex1 arr", a.slice(0, k1), [1, 2]);
  const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k2 = removeDuplicates(b);
  check("P12 ex2 k", k2, 5);
  check("P12 ex2 arr", b.slice(0, k2), [0, 1, 2, 3, 4]);
  check("P12 empty", removeDuplicates([]), 0);
}
// 13
check("P13 ex1", containsDuplicate([1, 2, 3, 1]), true);
check("P13 ex2", containsDuplicate([1, 2, 3, 4]), false);
check("P13 ex3", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
// 14
{
  const a = [0, 1, 0, 3, 12];
  moveZeroes(a);
  check("P14 ex1", a, [1, 3, 12, 0, 0]);
  const b = [0, 0, 1];
  moveZeroes(b);
  check("P14 ex2", b, [1, 0, 0]);
  const c = [1, 2, 3];
  moveZeroes(c);
  check("P14 ex3", c, [1, 2, 3]);
}
// 15
{
  const a = [1, 2, 3, 0, 0, 0];
  merge(a, 3, [2, 5, 6], 3);
  check("P15 ex1", a, [1, 2, 2, 3, 5, 6]);
  const b = [1];
  merge(b, 1, [], 0);
  check("P15 ex2", b, [1]);
  const c = [0];
  merge(c, 0, [1], 1);
  check("P15 ex3", c, [1]);
  const d = [4, 5, 6, 0, 0, 0];
  merge(d, 3, [1, 2, 3], 3);
  check("P15 nums2 smaller", d, [1, 2, 3, 4, 5, 6]);
}
// 16
check("P16 ex1", threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
check("P16 ex2", threeSum([0, 1, 1]), []);
check("P16 ex3", threeSum([0, 0, 0]), [[0, 0, 0]]);
check("P16 short", threeSum([1, -1]), []);
// 17
check("P17 ex1", plusOne([1, 2, 9]), [1, 3, 0]);
check("P17 ex2", plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
check("P17 ex3", plusOne([9, 9, 9]), [1, 0, 0, 0]);
check("P17 zero", plusOne([0]), [1]);
// 18
{
  const a = ["h", "e", "l", "l", "o"];
  reverseString(a);
  check("P18 ex1", a, ["o", "l", "l", "e", "h"]);
  const b = ["H", "a", "n", "n", "a", "h"];
  reverseString(b);
  check("P18 ex2", b, ["h", "a", "n", "n", "a", "H"]);
}
// 19
check("P19 ex1", lengthOfLastWord("Hello World"), 5);
check("P19 ex2", lengthOfLastWord("   fly me   to   the moon  "), 4);
check("P19 ex3", lengthOfLastWord("luffy is still joyboy"), 6);
check("P19 single", lengthOfLastWord("a"), 1);
// 20
check("P20 ex1", longestCommonPrefix(["flower", "flow", "flight"]), "fl");
check("P20 ex2", longestCommonPrefix(["dog", "racecar", "car"]), "");
check("P20 ex3", longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters"); // note: the PDF says "inter", but all three really share "inters"
check("P20 single", longestCommonPrefix(["alone"]), "alone");
check("P20 empty string", longestCommonPrefix(["abc", ""]), "");

console.log(`\nTests passed: ${passed}, failed: ${failed}`);
```
