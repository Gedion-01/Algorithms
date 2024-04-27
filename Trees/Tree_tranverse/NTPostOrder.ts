import { tree } from "../tree";
import { BinaryNode } from "../tree_types";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  // pre
  
  // recurse
  walk(curr.left, path);
  walk(curr.right, path);
  // post
  path.push(curr.value);
  return path;
}
function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

const res = post_order_search(tree);

console.log(res);
