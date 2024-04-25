/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-25 22:44:03
 */

function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }

  elem.addEventListender(type, (event) => {
    const target = event.target;
    if (selector) {
      // 代理邦定
      if (target.matches(selector)) {
        fn.call(target, event);
      }
      return;
    }
    fn.call(target, event);
  });
}
