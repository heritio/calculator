function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (arr) {
	if(arr.length < 0){
		return 0;
	}
	let total = 0;
    for(let i = 0; i < arr.length; i++){
      total += arr[i];
	};
	return total;

}

function multiply (arr) {
	return arr.reduce((total, elem) => total * elem);
}

function power(a,b) {
	 let total = 1;
	
	 for(let k = 0; k < b; k++){
		 total *= a;
	 }

	 return total;
}

function factorial(num) {
	if(num == 0 || num == 1){
		return 1;
	}else{
       return num * factorial(num - 1);
	}
}
