/*
 * :file description:
 * :name: /desigin/examples/combination.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 15:38:47
 * :last editor: 张德志
 * :date last edited: 2024-10-07 15:38:54
 */
class FileSystemComponent {
  constructor(name) {
    this.name = name;
  }
  // 组件的公共接口
  display() {
    throw new Error("This method should be overwritten!");
  }
}

//  叶子节点：文件
class File extends FileSystemComponent {
  constructor(name) {
    super(name);
  }
  display() {
    console.log(`File: ${this.name}`);
  }
}

// 组合节点：文件夹
class Folder extends FileSystemComponent {
  constructor(name) {
    super(name);
    this.children = []; // 存放子组件（文件或文件夹）
  }
  // 添加子组件
  add(component) {
    this.children.push(component);
  }
  // 移除子组件
  remove(component) {
    this.children = this.children.filter((child) => child !== component);
  }
  //展示文件夹及其子组件
  display() {
    console.log(`Folder: ${this.name}`);
    this.children.forEach((child) => child.display());
  }
}

// 创建文件和文件夹
const file1 = new File("file1.txt");

const folder1 = new Folder("Folder 1");

// 组装文件夹结构
folder1.add(file1);

// 展示整个文件系统
folder1.display();
