function insertionSort() {
	if (this.length < 2) return this
	let sortedListHead = this.head
	let unsortedListHead = this.head.next
	sortedListHead.next = null

	while (unsortedListHead !== null) {
		let current = unsortedListHead
		unsortedListHead = unsortedListHead.next
		if (current.value < sortedListHead.value) {
			current.next = sortedListHead
			sortedListHead = current
		}
		else {
			let searchPointer = sortedListHead
			while (searchPointer.next !== null && current.value > searchPointer.next.value) {
				searchPointer = searchPointer.next
			}
			current.next = searchPointer.next
			searchPointer.next = current
		}
	}
	this.head = sortedListHead
	let lastItem = null
	while (sortedListHead !== null) {
		lastItem = sortedListHead
		sortedListHead = sortedListHead.next
	}
	this.tail = lastItem
}