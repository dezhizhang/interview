/*
 * :file description:
 * :name: /typescript/src/utils.d.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-05 19:21:42
 * :last editor: 张德志
 * :date last edited: 2024-10-05 19:33:56
 */
declare let count: number;

declare let songName: string;

interface Point {
  x: number;
  y: number;
}

declare let position: Point;

declare function add(x: number, y: number): number;

declare function changeDirection(
  direction: "up" | "down" | "left" | "right"
): void;

type FomartPoint = (point: Point) => void;

declare const fomartPoint: FomartPoint;

export {count,songName,position,add, changeDirection,fomartPoint }
