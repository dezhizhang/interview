/*
 * :file description:
 * :name: /qiankun/src/fetch-resource.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 20:36:03
 * :last editor: 张德志
 * :date last edited: 2024-10-07 20:37:27
 */

export const fetchResource = (url: string) =>
  fetch(url).then((res) => res.text());
