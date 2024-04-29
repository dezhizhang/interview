/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-29 21:57:46
 */

// 链表反转
function reverseLinkList(listNode) {
  let prevNode;
  let curNode;
  let nextNode = listNode;


  while(nextNode) {
    if(curNode && !prevNode) {
      delete curNode.next;
    }

    if(curNode && prevNode) {
      curNode.next = prevNode;
    }

    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }


  curNode.next = prevNode;

  return curNode;
  
}


function createLinkList(arr) {
  const length = arr.length;

  if(length === 0) throw new Error('数组为空');

  let curNode = {
    value:arr[length - 1]
  }

  if(length === 1) return curNode;

  for(let i = length - 2;i >=0;i--) {
    curNode = {
      value:arr[i],
      next:curNode
    }
  }

  return curNode;

}


const n = createLinkList([1,2,3,4]);

console.log(reverseLinkList(n));



