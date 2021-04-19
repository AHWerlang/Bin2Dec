function convertToNumber() {
	var number = 0;
	var str = document.getElementById("binary").value;
	var f = 0

	if (isNaN(str)) {
		confirm(str + " is not a number!");
		return
	}

	for (var i = str.length - 1; i >= 0; i--) {
  		
  		if (str[i] == 0 || str[i] == 1) {
  		} else {
  			confirm("Insert only 0 and 1!");
  			break;
  		}


  		number += str[i] * Math.pow(2,f * str[i])
  		f++
	}

	document.getElementById("converted").value = number;
}