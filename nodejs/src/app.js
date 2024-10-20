/*
 * :file description: 
 * :name: /nodejs/src/app.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-06 05:24:39
 * :last editor: 张德志
 * :date last edited: 2024-10-20 19:27:44
 */

const sharp = require('sharp');

const compressImage = async (inputPath,outputPath,quality = 80) => {
  try{
    await sharp(inputPath)
    .jpeg({quality})
    .toFile(outputPath)
    console.log("图片压缩完成",outputPath)
  }catch(err) {
    console.error('压缩出错:',err);
  }
}


compressImage('input.jpg', 'output.jpg');