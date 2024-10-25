/*
 * :file description:
 * :name: /react/src/react.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 10:36:25
 * :last editor: 张德志
 * :date last edited: 2024-10-26 07:18:53
 */
import { REACT_ELEMENT } from "./stants";
import { toObject } from "./utils";
import Component from "./component";

function createElement(type, config, children) {
  let key, ref;
  if (config) {
    key = config.key;
    ref = config.ref;
    delete config.key;
    delete config.ref;
  }

  let props = { ...config };
  if (config) {
    if (arguments.length > 3) {
      props.children = Array.prototype.slice.call(arguments, 2).map(toObject);
    } else if (arguments.length === 3) {
      props.children = toObject(children);
    }
  }
  return {
    $$typeof: REACT_ELEMENT,
    type,
    key,
    ref,
    props,
  };
}

const React = {
  createElement,
  Component,
};

export default React;
