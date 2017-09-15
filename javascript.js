function solution1(){
	var maxLimit = document.getElementById("input1").value;

	var multipliers = [];
	var results = 0;

	for(var i = 0; i < maxLimit; i++){
		if(i % 3 === 0 || i % 5 === 0)
			multipliers.push(i);
	}

	for( var i = 0; i < multipliers.length; i++){
		results += multipliers[i];
	}

	document.getElementById("answer1").innerHTML = "The sum of all multiples of 3 or 5 below "+maxLimit+" is: "+results;
}

function solution2(){
	var maxLimit = document.getElementById("input4").value;

	var multipliers = [];
	var results = 0;
	var number1 = document.getElementById("input2").value;
	var number2 = document.getElementById("input3").value;

	for(var i = 0; i < maxLimit; i++){
		if(i % number1 === 0 || i % number2 === 0)
			multipliers.push(i);
	}

	for( var i = 0; i < multipliers.length; i++){
		results += multipliers[i];
	}

	document.getElementById("answer2").innerHTML = "The sum of all multiples of "+number1+ " or "+number2+ " below "+maxLimit+" is: "+results;
}