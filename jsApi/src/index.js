/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-28 23:26:21
 */

function isMatch(left, right) {
  if (left === '(' && right === ')') return true;
  if (left === '[' && right === ']') return true;
  if (left === '{' && right === '}') return true;

  return false;
}

function matchBracket(str) {
  const length = str.length;
  if (length === 0) return true;

  const stack = [];
  const leftSymble = '([{';
  const rightSymble = '}])';

  for (let i = 0; i < length; i++) {
    const s = str[i];
    if (leftSymble.includes(s)) {
      stack.push(s);
    } else if (rightSymble.includes(s)) {
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const str = '([{}])';

console.log(matchBracket(str));
