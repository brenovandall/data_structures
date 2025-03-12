class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
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
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined;

        let temp = this.head
        let pre = this.head

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
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

        this.length--

        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined

        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
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
        temp.next = null
        this.length--
        return temp
    }

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

    findMiddleNode() {
        if (this.head === null) return null

        let length = 0;
        let current = this.head;
        let middle = this.head;

        while (current.next !== null) {
            length++
            if (length % 2 === 0) {
                middle = middle.next
            }
            current = current.next
        }

        if (length % 2 == 1) {
            middle = middle.next
        }

        return middle
    }

    hasLoop() {
        let slow = this.head
        let fast = this.head

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next

            if (slow === fast) return true
        }

        return false
    }

    findKthFromEnd(k) {
        let temp = this.head
        let pointer = this.head

        for (let i = 0; i < k; i++) {
            if (!temp) return null
            temp = temp.next
        }

        while (temp) {
            temp = temp.next
            pointer = pointer.next
        }

        return pointer
    }

    removeDuplicates() {
	let values = new Set()
        let prev = null
	let current = this.head

	while (current !== null) {
		if (values.has(current.value)) {
			prev.next = current.next
			this.length--
		}
		else {
			values.add(current.value)
			prev = current
		}
		current = current.next
	}
  }

    binaryToDecimal() {
        let num = 0;
        let temp = this.head

        while (temp !== null) {
            num = num * 2 + temp.value;
            temp = temp.next
        }
        return num
    }
}
