import { tree } from "../tree";
import { BinaryNode } from "../tree_types";
// type BinaryNode<T> = {
//   value: T;
//   left: BinaryNode<T> | null;
//   right: BinaryNode<T> | null;
// };
/// <reference path="../../type.d.ts" />


function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  // pre
  path.push(curr.value);
  // recurse
  walk(curr.left, path);
  walk(curr.right, path);
  // post
  return path;
}
function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

const res = pre_order_search(tree);

console.log(res);
