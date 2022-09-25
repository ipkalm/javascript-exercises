const reverseString = function(str) {
	const tmp = str.split('');
	str = '';
	for (let i = tmp.length - 1; i >= 0; i--) {
		str += tmp[i];
	}

	return str;
};

// Do not edit below this line
module.exports = reverseString;
