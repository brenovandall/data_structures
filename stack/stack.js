class Node {
    constructor(value) {
        this.value = value
        this.down = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.height = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.top) {
            this.top = newNode
        }
        else {
            newNode.down = this.top
            this.top = newNode
        }
        this.height++
        return this;
    }

	pop() {
        if (this.length === 0) return undefined

        let temp = this.top.down
        this.top.down = null
        this.top = temp

        this.height--
        return temp;
    }
}

// this method uses an array
function isBalancedParentheses(parentheses) {
    let stack = new Stack()
    for (let i = 0; i < parentheses.length;i++) {
        if (parentheses[i] === '(') {
            stack.push(parentheses[i])
        }
        if (parentheses[i] === ')') {
            if (stack.size() === 0 || stack.stackList[0] !== '(') return false
            stack.pop()
        }
    }

    if (stack.size()===0) return true
    return false
}