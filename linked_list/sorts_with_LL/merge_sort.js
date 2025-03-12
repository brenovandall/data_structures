function merge(otherList) {
	let otherHead = otherList.head
	let dummyNode = new Node(0)
	let current = dummyNode

	while (this.head !== null && otherHead !== null) {
		if (this.head.value < otherHead.value) {
			current.next = this.head
			this.head = this.head.next
		}
		else {
			current.next = otherHead
			otherHead = otherHead.next
		}
		current = current.next
	}
	if (this.head !== null) {
		current.next = this.head
	}
	else {
		current.next = otherHead
		current.tail = otherHead.tail
	}
	this.head = dummyNode.next
	this.length += otherList.length
}