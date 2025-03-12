class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    dequeue() {
        if (this.length === 0) return undefined

        var temp = this.first.next

        if (this.length === 1) {
            this.first = null
            this.last = null
        }
        else {
            this.first.next = null
            this.first = temp
        }

        this.length--
        return temp
    }
}