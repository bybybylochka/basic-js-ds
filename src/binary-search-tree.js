const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.Root=null;
  }
  root() {
    return this.Root;
  }

  add(data) {
    this.Root=addIn(this.Root, data);

    function addIn(node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data===data){
        return node;
      }
      if(data<node.data){
        node.left=addIn(node.left, data);
      }
      else{
        node.right=addIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.Root, data);

    function searchIn(node, data){
      if(!node){
        return false;
      }
      if(node.data===data){
        return true;
      }
      if(data<node.data){
        return searchIn(node.left, data);
      }
      else{
        return searchIn(node.right, data);
      }
    }
  }

  find(data) {
    return searchIn(this.Root, data);

    function searchIn(node, data){
      if(!node){
        return null;
      }
      if(node.data===data){
        return node;
      }
      if(data<node.data){
        return searchIn(node.left, data);
      }
      else{
        return searchIn(node.right, data);
      }
    }
  }

  remove(data) {
    this.Root = removeData(this.Root, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeData(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.Root) {
      return;
    }

    let node = this.Root;
    while (node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    if (!this.Root) {
      return;
    }

    let node = this.Root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};