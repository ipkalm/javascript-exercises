const repeatString = function(str, count) {
	if(count < 0) {
		return 'ERROR';
	}

	let tmp = '';
	for (let i = 0; i < count; i++) {
		tmp += str;		
	}
	return tmp;
};

// Do not edit below this line
module.exports = repeatString;
