/*
 * :file description:
 * :name: /react/src/utils.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:21:34
 * :last editor: 张德志
 * :date last edited: 2024-10-25 11:28:17
 */

import { REACT_TEXT } from "./stants";

export function toObject(element) {
  if (typeof element === "string" || typeof element === "number") {
    return { type: REACT_TEXT, content: element };
  }
  return element;
}
