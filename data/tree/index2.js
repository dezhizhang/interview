/*
 * @Author: your name
 * @Date: 2021-02-27 21:42:00
 * @LastEditTime: 2021-02-27 22:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index2.js
 */

 //广度优先遍历
 //1新建一个队列，把根节点入队
 //2把队头出队并方问
 //3把队头的children挨个入队
 //4重复第二三步直到队列为空

 let root = {
    val:"a",
    children:[
        {
            val:"b",
            children:[
               {
                   val:"d",
                   children:[
                       
                   ]
               },
               {
                   val:"e",
                   children:[
                       
                   ]
               }
            ]
        },
        {
           val:"c",
           children:[
              {
                  val:"f",
                  children:[
                      
                  ]
              },
              {
               val:"g",
               children:[
                   
               ]
               }
           ]
       }
    ]
}
 

// const bfs = (root) => {
//     const q = [root];
//     while(q.length > 0) {
//         const n = q.shift();
//         console.log(n.val);
//         n.children.forEach(child => {
//             q.push(child);
//         })
//     }
// }

// bfs(root);


const bfs = (root) => {
    const q = [root];
    while(q.length > 0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child);
        })
    }
}

