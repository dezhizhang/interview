/*
 * :file description:
 * :name: /vite/src/main.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-01 09:45:09
 * :last editor: 张德志
 * :date last edited: 2024-10-01 16:14:09
 */
import React from 'react';
import typescript from '@/assets/typescript.svg';

import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app') as any);
root.render(<h1>Hello, world

    <img src={typescript}/>
</h1>);