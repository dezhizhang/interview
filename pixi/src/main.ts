/*
 * :file description:
 * :name: /pixi/src/main.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-30 21:22:22
 * :last editor: 张德志
 * :date last edited: 2024-10-01 09:23:59
 */
import * as PIXI from "pixi.js";

const app = new PIXI.Application();
await app.init({
  width: window.innerWidth,
  height: window.innerHeight,
  background: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.canvas);


const rectangle = new PIXI.Graphics();
rectangle.beginFill(0x66ccff);
rectangle.drawRect(200,200,164,64);
rectangle.endFill();

app.stage.addChild(rectangle);

