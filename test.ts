// test/mergeSort.test.ts
import { test } from "uvu";
import * as assert from "uvu/assert";
import { merge } from "./mergeSort";

test("merge sorts correctly", () => {
  let collection_1 = [1, 2, 3, 5, 20];
  let collection_2 = [20, 4, 2, 0];
  let collection_3 = [6, 8, 10, 11];
  let expected = [0, 1, 2, 2, 3, 4, 5, 6, 8, 10, 11, 20, 20];
  let result = merge(collection_1, collection_2, collection_3);
  assert.equal(result, expected);
});


test.run();
