/*
 * :file description: 
 * :name: /creact/packages/scheduler/src/SchedulerProrities.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-23 15:58:59
 * :last editor: 张德志
 * :date last edited: 2024-10-23 16:02:45
 */


export type PrioritiesLevel = 0 | 1 | 2 | 3 | 4 | 5;

export const NoPriority = 0;
export const ImmediatePriority = 1;
export const UserBlockingPriority = 2;
export const NormalPriority = 3;
export const LowPriority = 4;
export const IdlePriority = 5;

