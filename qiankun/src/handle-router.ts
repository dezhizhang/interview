/*
 * :file description:
 * :name: /qiankun/src/handle-router.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 20:04:09
 * :last editor: 张德志
 * :date last edited: 2024-10-07 21:59:48
 */

import { getApps } from "./main";
import { importHTML } from "./import-html";
import { getPrevRoute, getNextRoute } from "./rewrite-router";

// 处理路由变化
export async function handleRouter() {
  const apps = getApps();

  // 载上一个应用
  const prevApp = apps.find((item) => {
    return getPrevRoute().startsWith(item.activeRule);
  });

  if(prevApp) {
    await unmount(prevApp);
  }

  const app = apps.find((item) => getNextRoute().startsWith(item.activeRule));

  if (!app) {
    return;
  }

  // 加载子应用
  const container = document.querySelector(app.container);
  const { template, execScripts } = await importHTML(app.entry);
  // 配置全局环境变量
  (window as any).__POWERED_BY_QIANKUN__ = true;
  container.appendChild(template);

  const appExports = await execScripts();
  await bootstrap(appExports);
  await mount(appExports);
  await unmount(appExports);
}

async function bootstrap(app: any) {
  app.bootstrap && (await app.bootstrap());
}

async function mount(app: any) {
  app.mount &&
    (await app.mount({
      container: document.querySelector(app.container),
    }));
}

async function unmount(app: any) {
  app.unmount && (await app.unmount());
}
