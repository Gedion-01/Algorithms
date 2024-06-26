import { tree } from "../tree";
import { BinaryNode } from "../tree_types";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  // pre

  // recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  // post
  return path;
}
function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

const res = in_order_search(tree);

console.log(res);
