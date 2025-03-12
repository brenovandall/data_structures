class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    DFSPreOrder() {
        let results = []
        function traverse(currentNode) {
            results.push(currentNode.value)
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
}