/*
 * :file description:
 * :name: /typescript/examples/cros-and-interface.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-05 10:25:29
 * :last editor: 张德志
 * :date last edited: 2024-10-05 10:25:29
 */
interface A {
  fn: (value: number) => string;
}

interface B {
  fn: (value: string) => string;
}

type C = A & B;

let c: C = {
  fn(value: number | string) {
    return "hello";
  },
};

console.log(c.fn(123));
