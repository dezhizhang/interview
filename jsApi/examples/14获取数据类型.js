
function getDataType(x) {
  const originType = Object.prototype.toString.call(x);
  const spaceIndex = originType.indexOf(" ");
  const type = originType.slice(spaceIndex + 1, -1);
  return type.toLowerCase();
}

console.log(getDataType("hello"));
