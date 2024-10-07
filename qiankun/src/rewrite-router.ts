/*
 * :file description:
 * :name: /qiankun/src/rewrite-router.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 20:01:26
 * :last editor: 张德志
 * :date last edited: 2024-10-07 22:05:41
 */
import { handleRouter } from "./handle-router";

let prevRoute = ""; // 上一个路由
let nextRoute = window.location.pathname; // 下一个路由

export const getPrevRoute = () => prevRoute;
export const getNextRoute = () => nextRoute;

export const rewriteRouter = () => {
  // 临视路由变化
  window.addEventListener("popstate", () => {
    prevRoute = nextRoute;
    nextRoute = window.location.pathname;
    handleRouter();
  });

  // pushState 路由变化
  const rawPushState = window.history.pushState;
  window.history.pushState = (...args) => {
    // 导航前
    prevRoute = window.location.pathname;
    rawPushState.apply(window.history, args);
    // 导航后
    nextRoute = window.location.pathname;
    handleRouter();
  };

  // replaceState
  const rawReplaceState = window.history.replaceState;
  window.history.replaceState = (...args) => {
    // 导航前
    prevRoute = window.location.pathname;
    rawReplaceState.apply(window.history, args);
    // 导航后
    nextRoute = window.location.pathname;
    handleRouter();
  };
};
