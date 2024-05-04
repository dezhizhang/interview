/*
 * :file description:
 * :name: /webpack/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-03 20:43:02
 * :last editor: 张德志
 * :date last edited: 2024-05-04 22:26:18
 */
import moment from 'moment';
import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

console.log('date',moment().format('ll'));
