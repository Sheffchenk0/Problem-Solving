// Runtime 141ms Beats 92.41%of users with JavaScript
// Memory 51.90MB Beats 69.63%of users with JavaScript
const MyHashMap = function () {
  this.map = {};
};

MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

MyHashMap.prototype.get = function (key) {
  if (this.map[key] !== undefined) {
    return this.map[key];
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};
