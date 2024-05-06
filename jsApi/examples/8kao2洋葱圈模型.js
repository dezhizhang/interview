/*
 * :file description: 
 * :name: /jsApi/examples/8kao2洋葱圈模型.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-06 21:23:43
 * :last editor: 张德志
 * :date last edited: 2024-05-06 21:23:49
 */

const Koa = require('koa2');

const app = new Koa();

app.use(async(ctx,next) => {
    await next();

    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});


app.use(async(ctx,next) => {
    const start = Date.now();
    await next();

    const ms = Date.now() - start;
    ctx.set('X-Response-Time',`${ms}ms`)
});


app.use(async ctx => {
    ctx.body = 'hello world'
});

app.listen(3000);

