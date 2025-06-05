function findLargest(a, b, c) {
  let maxi = -Infinity;
	if(a > maxi){
		maxi = a;
	}
	if(b > maxi){ 
		maxi = b;
	}
	if(c > maxi){
		maxi = c;
	}

	return maxi;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
