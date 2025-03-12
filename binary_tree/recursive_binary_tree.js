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

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false

        if (value === currentNode.value) return true

        if (value < currentNode.value) {
            return this.rContains(value,currentNode.left)
        }
        else {
            return this.rContains(value,currentNode.right)
        }
    }

    #rInsert(value, currentNode = this.root) {
        if (currentNode === null) return new Node(value)

        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left)
        }
        else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right)
        }
        return currentNode
    }

    rInsert(value) {
        if (this.root === null) this.root = new Node(value)
        this.#rInsert(value)
    }

    #rDelete(value, currentNode = this.root) {
        if (currentNode === null) return null

        if (value < currentNode.value) {
            currentNode.left = this.#rDelete(value, currentNode.left)
        }
        else if (value > currentNode.value) {
            currentNode.right = this.#rDelete(value, currentNode.right)
        }
        else {
            if (currentNode.left === null && currentNode.right === null) {
                return null
            }
            else if (currentNode.left === null) {
                currentNode = currentNode.right
            }
            else if (currentNode.right === null) {
                currentNode = currentNode.left
            }
            else {
                let minTreeValue = this.minValue(currentNode.right)
                currentNode.value = minTreeValue
                currentNode.right = this.#rDelete(minTreeValue, currentNode.right)
            }
        }
        return currentNode
    }

    rDelete(value) {
        this.root = this.#rDelete(value, this.root);
    }

    minValue(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }
}