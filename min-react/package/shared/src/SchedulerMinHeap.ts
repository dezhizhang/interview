export type Heap<T extends Node> = Array<T>;

export type Node = {
  id: number;
  sortIndex: number;
};

// 获取堆顶元素
export function peek<T extends Node>(heap: Heap<T>): T | null {
  return heap.length === 0 ? null : heap[0];
}

// 给堆添加元素
export function push<T extends Node>(heap: Heap<T>, node: T): void {
  // 把node放在堆最后
  heap.push(node);
  // 调整最小堆，从小往上调整最小堆
  const index = heap.length;

  siftUp(heap, node, index);
}

// 从下往上调整最小堆
function siftUp<T extends Node>(heap: Heap<T>, node: T, i: number): void {
  let index = i;
  while (index > 0) {
    const parentIndex = (index - 1) >>> 1;
    const parent = heap[parentIndex];
    if (compare(parent, node) > 0) {
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      return;
    }
  }
}

// 比较元素
function compare(a: Node, b: Node) {
  const diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}
