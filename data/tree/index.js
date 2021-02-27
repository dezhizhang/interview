/*
 * @Author: your name
 * @Date: 2021-02-27 21:16:13
 * @LastEditTime: 2021-02-27 21:41:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index.js
 */

 //深度优先遍历
 //1访问根节点
 //对根节点的children进行挨个进行深度优先遍历

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


const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
}

dfs(root);
 
