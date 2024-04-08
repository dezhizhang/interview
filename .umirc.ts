/*
 * :file description: 
 * :name: /interview/.umirc.ts
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-08 07:17:04
 * :last editor: 张德志
 * :date last edited: 2024-04-08 23:03:19
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home' },
  ],
  fastRefresh: {},
});
