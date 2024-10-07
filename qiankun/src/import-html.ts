/*
 * :file description:
 * :name: /qiankun/src/import-html.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 20:25:09
 * :last editor: 张德志
 * :date last edited: 2024-10-07 21:23:55
 */

import { fetchResource } from "./fetch-resource";

export const importHTML = async (url: string) => {
  const html = await fetchResource(url);

  const template: HTMLElement = document.createElement("div");
  template.innerHTML = html;

  const scripts = template.querySelectorAll("script");

  function getExternalScripts() {
    return Promise.all(
      Array.from(scripts).map((script) => {
        const src = script.getAttribute("src");
        if (!src) {
          return Promise.resolve(script.innerHTML);
        } else {
          return fetchResource(src.startsWith("http") ? src : `${url}${src}`);
        }
      })
    );
  }

  async function execScripts() {
    const script = await getExternalScripts();

    // 手动的构造一个commonjs模块环境
    const module = {exports:{}};
    const exports = module.exports;
    
    script.forEach((code) => {
      eval(code);
    });

    return exports;
  }

  return {
    template,
    getExternalScripts,
    execScripts,
  };
};
