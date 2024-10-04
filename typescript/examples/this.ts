/*
 * :file description:
 * :name: /typescript/examples/this.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-04 15:06:11
 * :last editor: 张德志
 * :date last edited: 2024-10-04 15:19:31
 */

// interface User {
//   admin: boolean;
// }

// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }

// const db: DB = {
//   filterUsers: (filter: (this: User) => boolean) => {
//     let user1: User = {
//       admin: true,
//     };
//     let user2: User = {
//       admin: false,
//     };

//     return [user1, user2];
//   },
// };

// const admins = db.filterUsers(function (this: User) {
//   return this.admin;
// });

// console.log(admins);

interface User {
  admin: boolean;
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db: DB = {
  filterUsers: (filter: (this: User) => boolean) => {
    let user1: User = {
      admin: true,
    };

    let user2: User = {
      admin: false,
    };
    return [user1, user2];
  },
};

const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

console.log(admins);
