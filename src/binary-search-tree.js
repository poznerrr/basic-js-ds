const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue
  }

  add(data) {
    if (this.rootValue === null) {
      this.rootValue = new Node(data);
    } else InsertWithin(this.rootValue, data);
    function InsertWithin(node, data) {
      if (node.data > data) {
        if (node.left == null) {
          node.left = new Node(data);
        } else {
          InsertWithin(node.left, data);
        }
      } else if (node.data < data) {
        if (node.right == null) {
          node.right = new Node(data)
        } else {
          InsertWithin(node.right, data);
        }
      }
    }
  }

  has(data) {
    let node = this.rootValue;
    while (node !== null) {
      if (data === node.data) {
        return true;
      }
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  find(data) {
    let node = this.rootValue;
    if (node === null) {
      return null;
    }
    while (node.data !== data) {
      if (data < node.data) {
        node = node.left
      } else {
        node = node.right
      }
      if (node === null) {
        return null;
      }
    }
    return node;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }

    }
    this.rootValue = removeNode(this.rootValue, data);
  }

  min() {
    let node = this.rootValue;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootValue;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};