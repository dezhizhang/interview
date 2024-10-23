/*
 * :file description:
 * :name: /creact/packages/scheduler/src/SchedulerMinHeap.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-23 14:31:03
 * :last editor: 张德志
 * :date last edited: 2024-10-23 15:13:05
 */

export type Heap<T extends Node> = Array<T>;

export type Node = {
  id: number;
  sortIndex: number; // 排序的依据
};

// 获取堆顶元素
export function peek<T extends Node>(heap: Heap<T>): T | null {
  return heap.length === 0 ? null : heap[0];
}

function compare(a: Node, b: Node) {
  const diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}


// 从下住上堆化
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

// 给堆顶添加元素
export function push<T extends Node>(heap: Heap<T>, node: T): void {
  // 把node放到堆的最后
  const index = heap.length;

  heap.push(node);
  // 调整最小堆
  siftUp(heap, node, index);
}
