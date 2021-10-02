	function solution(s) {
		let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		let english = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
		var answer = 0;

		english.forEach((item, index) => {
			if(s.includes(item)) {
				s = s.replace(item, num[index]); 
			}
		});

		answer = parseInt(s);

		return answer;
	}
	/*
	function solution(s) {
		let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
		var answer = s;

		for(let i=0; i< numbers.length; i++) {
			let arr = answer.split(numbers[i]);
			answer = arr.join(i);
		}

		return Number(answer);
	}
	
	split과 join 공부해보기!
	*/