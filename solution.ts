//  Problem 1

var staircase = function (n: number): string {
    const rows: string[] = [];
    for (let i = 0; i < n; i++) {
        rows.push(" ".repeat(n - 1 - i) + "#".repeat(i + 1));
    }
    return rows.join("\n");
};


//  Problem 2
var gradingStudents = function (grades: number[]): number[] {
    return grades.map((grade) => {
        if (grade < 38) return grade;
        const nextMultiple = Math.ceil(grade / 5) * 5;
        return nextMultiple - grade < 3 ? nextMultiple : grade;
    });
};


// Problem 3.

var timeConversion = function (s: string): string {
    const period = s.slice(-2).toUpperCase(); // "AM" or "PM"
    const [hourText, minutes, seconds] = s.slice(0, -2).split(":");
    let hour = parseInt(hourText, 10) % 12; // turns 12 into 0
    if (period === "PM") hour += 12;
    return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
};


//   Problem 4
var repeatStr = function (n: number, s: string): string {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
};


// Problem 5

var solution = function (str: string): string {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};


// Problem 6:

var positiveSum = function (arr: number[]): number {
    let total = 0;
    for (const value of arr) {
        if (value > 0) total += value;
    }
    return total;
};


//   Problem 7

var summation = function (num: number): number {
    return (num * (num + 1)) / 2;
};


//  Problem 8: 

var booleanToString = function (b: boolean): string {
    return b ? "true" : "false";
};


//  Problem 9

var fizzBuzz = function (n: number): string[] {
    const answer: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) answer.push("FizzBuzz");
        else if (i % 3 === 0) answer.push("Fizz");
        else if (i % 5 === 0) answer.push("Buzz");
        else answer.push(String(i));
    }
    return answer;
};


//   Problem 10

var runningSum = function (nums: number[]): number[] {
    const result: number[] = [];
    let total = 0;
    for (const value of nums) {
        total += value;
        result.push(total);
    }
    return result;
};


//   Problem 11:
var maximumWealth = function (accounts: number[][]): number {
    let richest = 0;
    for (const customer of accounts) {
        let wealth = 0;
        for (const money of customer) wealth += money;
        if (wealth > richest) richest = wealth;
    }
    return richest;
};


//  Problem 12: 

var removeDuplicates = function (nums: number[]): number {
    if (nums.length === 0) return 0;
    let write = 1;
    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[read - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
};


//   Problem 13

var containsDuplicate = function (nums: number[]): boolean {
    const seen = new Set<number>();
    for (const value of nums) {
        if (seen.has(value)) return true;
        seen.add(value);
    }
    return false;
};


//  Problem 14
var moveZeroes = function (nums: number[]): void {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            nums[write] = nums[read];
            write++;
        }
    }
    while (write < nums.length) {
        nums[write] = 0;
        write++;
    }
};


//   Problem 15:
var merge = function (
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};


//  * Problem 16: 

var threeSum = function (nums: number[]): number[][] {
    const sorted = [...nums].sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] > 0) break;
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([sorted[i], sorted[left], sorted[right]]);
                left++;
                right--;
                while (left < right && sorted[left] === sorted[left - 1]) left++;
                while (left < right && sorted[right] === sorted[right + 1]) right--;
            }
        }
    }
    return result;
};


//  Problem 17

var plusOne = function (digits: number[]): number[] {
    const result = [...digits];
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] < 9) {
            result[i]++;
            return result;
        }
        result[i] = 0;
    }
    return [1, ...result];
};


//   Problem 18
var reverseString = function (s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};


//  Problem -19

var lengthOfLastWord = function (s: string): number {
    let i = s.length - 1;
    while (i >= 0 && s[i] === " ") i--; // trailing spaces
    let length = 0;
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }
    return length;
};


//  Problem 20:
var longestCommonPrefix = function (strs: string[]): string {
    if (strs.length === 0) return "";
    const first = strs[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== first[i]) {
                return first.slice(0, i);
            }
        }
    }
    return first;
};



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

