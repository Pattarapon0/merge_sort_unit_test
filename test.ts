// test/mergeSort.test.ts
import { test } from "uvu";
import * as assert from "uvu/assert";
import { merge } from "./mergeSort";

test("merge sorts correctly", () => {
  assert.equal(merge([1, 2, 3, 5, 20], [20,4, 2, 0], [6, 8,10,11]), [0, 1, 2, 2, 3, 4, 5, 6, 8, 10, 11, 20, 20]);
});


test.run();
