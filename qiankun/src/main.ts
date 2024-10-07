/*
 * :file description:
 * :name: /qiankun/src/main.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 19:37:30
 * :last editor: 张德志
 * :date last edited: 2024-10-07 20:12:20
 */
import { rewriteRouter } from "./rewrite-router";
import { handleRouter } from './handle-router';

let _apps: any[] = [];

export const getApps = () => _apps;

export const registerMicroApps = (apps: any[]) => {
  _apps = apps;
};

export const start = () => {
  // 临视路由变化
  rewriteRouter();

  handleRouter();
};

start();
