function selectionSort() {
	if (this.length < 2) return this
	let current = this.head
	while (current.next !== null) {
		let smallest = current
		let innerCurrent = current.next
		while (innerCurrent !== null) {
			if (innerCurrent.value < smallest.value) {
				smallest = innerCurrent
			}
			innerCurrent = innerCurrent.next
		}
		if (smallest !== current) {
			const temp = current.value
			current.value = smallest.value
			smallest.value = temp
		}
		current = current.next
	}
}