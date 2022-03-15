function findFactorial(n) {
	if(n==1){
		return n;
	} else {
		return n*findFactorial(n-1);
	}
}

function findCubeOfNumber(n) {
	return Math.pow(n,3);
}

function findAreaOfEqTriangle(n) {
	return ((Math.sqrt(3)/4)*Math.pow(n,2)).toFixed(2);
}

function findNumberOfDaysInMonth(n) {
	if(n <= 0 || n > 12) {
		return "Error";
	} else {
		let currentYear = new Date().getFullYear();
		return new Date(currentYear, n, 0).getDate();
	}
}

function converTemperatureToFahrenheit(n) {
	return (((n*9)/5)+32).toFixed(2);
}

function sumOfValue(n) {
	if(n==0){
		return n;
	} else {
		return n + sumOfValue(n-1);
	}
}

function findNthTermValueOfSeries(n) {
// Series = 1,4,9,16,25,36
// formula = nth*nth
	return Math.pow(n,2);
}

function findLenghtOfRemovedSpaceString(n) {
	if(n== null){
		return "ERROR";
	}else if(n!=null &&( n == "" || n == " ")){
		return "ERROR";
	}
	
	let length = (n.replace(" ","")).length;
	if(length <= 0){
		return "ERROR";
	} else {
		return length;
	}
}

function findRootsOfQuadraticEquation(n) {
	let a = n.split(" ")[0];
	let b = n.split(" ")[1];
	let c = n.split(" ")[2];
	
	let x = ((-b + Math.sqrt(Math.pow(b,2)- 4*a*c))/2*a).toFixed(2);
	let y = ((-b - Math.sqrt(Math.pow(b,2)- 4*a*c))/2*a).toFixed(2);
	console.log( x + " "+ y);
}

function sortedOrderOfArray(n){
	n.splice(0, 1);
	for(let i = 0; i < n.length - 1; i++) {
		for(let j = i+1; j < n.length; j++){
			if(i%2 == 0 && j%2 == 0 && n[i] > n[j]) {
				let temp = n[i];
				n[i] = n[j];
				n[j] = temp;
			}
		}
	}
	return n;
}

function findOccuranceSortedArray(n){
	let numberMap = new Map();
	let maximumValueOccurrance = 0;
	let resultantArray = [];
	let index = 0;
	
	for(let i = 0;i< n.length; i++) {
		if(numberMap.has(n[i])){
			let value = numberMap.get(n[i]);
			numberMap.set(n[i], value + 1);
		} else {
			numberMap.set(n[i], 1);
		}
	}

	numberMap.forEach (function(value, key) {
		if(maximumValueOccurrance < value) {
			maximumValueOccurrance = value;
		}
	});
	
	for(let i = maximumValueOccurrance; i > 0; i--) {
		let tempArray = [];
		let j=0;
		numberMap.forEach (function(value, key) {
			if(value == i) {
				tempArray[j] = key;
				j++;
			}
		});
		
		if(tempArray.length != 0){
			for(let k = 0; k < tempArray.length-1; k++) {
				for(let l = k + 1; l < tempArray.length; l++) {
					if( tempArray[k] < tempArray[l]) {
						let temp = tempArray[k];
						tempArray[k]= tempArray[l];
						tempArray[l] = temp;
					}
				}
			}
			
			for(let k = 0;k < tempArray.length; k++){
				resultantArray[index] = tempArray[k];
				index++;
			}
		}
	}
	return resultantArray;
}

function findPalindromeNumbersInRange(n){
	let count = 0;
	for(let number = 1; number <= n; number++) { 
		 let temp = number.toString().split("").reverse().join("");		 
		if(number==temp){
			count++;
		}	
	}
	return count;
} 

function fintNthValueInSeries(n){
//series = 2, 6, 12, 20, 30 .....
// difference =4,6,8,10,
	let a = 2;
	let b = 6;
	let difference = b-a;
	let result = a;
	for(let i= 2;i<= n; i++) {
		result = result + difference;
		difference = difference + 2;
	}
	return result;
}

function findRotatedArray(){
	const prompt = require("prompt-sync")(); // use "npm install prompt-sync" if run time error comes
	const input1 = prompt("Enter input fistLine :");
	const input2 = prompt("Enter input secondLine :");
	let size = input1.split(" ")[0];
	let index = input1.split(" ")[1];
	let inputArray = input2.split(" ");
	while(index!= 0) {
		let temp = inputArray[0];
		for(let i = 1; i < size; i++){
			inputArray[i-1] = inputArray[i];
		}
		inputArray[size-1] = temp;
		index--;
	}
	return inputArray;
}

function evaluatePostfixExpression(n){
	        var stack = [];
			postfixArray = n.split(" ");
        for( element of postfixArray){
            if(isNaN(element)){
                var x = stack.pop();
                var y = stack.pop();
                if (element == "+"){
                    result = (y+x);
                    stack.push(y + x);
                } else if (element == '-'){
                    stack.push(y - x);
                } else if (element == '*'){
                    stack.push(y * x);
                } else if (element == '/'){
                    stack.push(y / x);
                }
            } else {
                stack.push( parseFloat(element) );
            }
        }
        //final check for non numbers within the stack
        var returnValue = null;
        while( stack.length > 0 ){
            var element = stack.pop();  
            if(isNaN(element)){
                continue;
            } else{
                returnValue = element;
            }
        }
        return returnValue;
}


// scenario 1
console.log("1.Factorial of a number: "+findFactorial(5));
console.log("------------------------------------------------------------------------");
// Scenario 2
console.log("2.Cube of a number: "+findCubeOfNumber(2));
console.log("------------------------------------------------------------------------");
// Scenario 3
console.log("3.Area of equilateral Triangle: "+findAreaOfEqTriangle(20));
console.log("------------------------------------------------------------------------");
// Scenario 4
console.log("4.Number of Days in that month: "+findNumberOfDaysInMonth(8));
console.log("------------------------------------------------------------------------");
// Scenario 5
console.log("5.Converted Temperature to Fahrenheit is: "+converTemperatureToFahrenheit(12));
console.log("------------------------------------------------------------------------");
// Scenario 6
console.log("6.Sum of the value is: "+sumOfValue(10));
console.log("------------------------------------------------------------------------");
// Scenario 7
console.log("7.Nth value of the series is: "+findNthTermValueOfSeries(18));
console.log("------------------------------------------------------------------------");
// Scenario 8
console.log("8.Length of removed whiteSpace string is: "+findLenghtOfRemovedSpaceString("Lorem Ipsum"));
console.log("------------------------------------------------------------------------");
// Scenario 9
console.log("9.Roots of Quadratic Equations: ");
findRootsOfQuadraticEquation("1 5 6");
console.log("------------------------------------------------------------------------");
// Scenario 10
console.log("10.Sorted array is: "+ sortedOrderOfArray(new Array(5, 3, 9, 1, 44, 6)));
console.log("------------------------------------------------------------------------");
// Scenario 11
console.log("11.Occurance Sorted array is: "+ findOccuranceSortedArray(new Array(3, 3, 4, 4, 7, 8)));
console.log("------------------------------------------------------------------------");
// Scenario 12
console.log("12.Palindrome number count in range is: "+ findPalindromeNumbersInRange(5));
console.log("------------------------------------------------------------------------");
// Scenario 13
console.log("13.Nth value in the series: "+ fintNthValueInSeries(5));
console.log("------------------------------------------------------------------------");
// Scenario 14
console.log("14.Rotated array is: "+ findRotatedArray());
console.log("------------------------------------------------------------------------");
// Scenario 15
console.log("15.Postfix evaluated value is: "+ evaluatePostfixExpression("5 3 1 * + 9 -"));
