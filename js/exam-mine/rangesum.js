//정답은 ts/exam
// const assert = require("assert");
import assert from "assert"; // ESM

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
const rangeSum = function (idx1 = 0, idx2 = arr.length - 1) {
	let sum = 0;
	for (let i = idx1; i <= idx2; i += 1) {
		sum += arr[i];
	}
	return sum;
};
assert.deepStrictEqual(rangeSum(2, 5), 19);
assert.deepStrictEqual(rangeSum(3, 5), 15);
assert.deepStrictEqual(rangeSum(1, 4), 14);
assert.deepStrictEqual(rangeSum(0, 4), 15);
assert.deepStrictEqual(rangeSum(5, 8), 30);
assert.deepStrictEqual(rangeSum(6, 8), 22);
assert.deepStrictEqual(rangeSum(2, 8), 41);
assert.deepStrictEqual(rangeSum(4, 4), 5);
assert.deepStrictEqual(rangeSum(5), 30);
assert.deepStrictEqual(rangeSum(2), 41);
assert.deepStrictEqual(rangeSum(), 45);