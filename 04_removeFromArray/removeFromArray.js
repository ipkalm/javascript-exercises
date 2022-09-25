const removeFromArray = function(array, ...args) {
	if (args.length === 0) {
		return false;
	}

	for (const arg of args) {
		for (const arr in array) {
			if (arg === array[arr]) {
				array.splice(arr, 1);
			}
		}
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
