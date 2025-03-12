class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        let temp = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }

        this.length--
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined;

        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.head.prev = null
        this.length--

        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined
        let temp = this.head

        if (index < this.length/2) {
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next
            }
        }
        else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index)

        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false

        if (index === 0) {
            return this.unshift(value)
        }
        else if (index === this.length) {
            return this.push(value)
        }

        const newNode = new Node(value)
        let temp = this.get(index - 1)
        newNode.next = temp.next
        newNode.prev = temp
        temp.next.prev = newNode
        temp.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined

        if (index === 0) {
            return this.shift()
        }
        else if (index === this.length - 1) {
            return this.pop()
        }

        var before = this.get(index - 1)
        var temp = before.next
        before.next = temp.next
        before.next.prev = before
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }

    swapFirstLast() {
        if (this.length === 0) return undefined

        let temphead = this.head.value
        let temptail = this.tail.value

        this.head.value = temptail
        this.tail.value = temphead
    }

    reverse() {
        if (this.length === 0) return undefined

        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = temp.prev
            temp = next
        }
        return this
    }

    isPalindrome() {
        if (this.length < 2) return true

        let start = this.head
        let end = this.tail

        let halfList = Math.round(this.length/2)
        for (let i = 0; i < halfList; i++) {
            if (start.value !== end.value) return false
            start = start.next
            end = end.prev
        }
        return true
    }
}
