function bubbleSort() {
	if (this.length < 2) return this
	let sortedUntil = null
	while (sortedUntil !== this.head.next) {
		let current = this.head
		while (current.next !== sortedUntil) {
			let nextNode = current.next
			if (current.value > nextNode.value) {
				const temp = current.value
				current.value = nextNode.value
				nextNode.value = temp
			}
			current = current.next
		}
		sortedUntil = current
	}
}