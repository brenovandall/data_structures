const fatorial = function(num) {
	debugger;
    if (num === 0 || num === 1) {
    	return 1
    } else {
    	return num * fatorial(num - 1)
    }
}