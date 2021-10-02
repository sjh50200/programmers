
function solution(numbers) {
	let number = [0,1,2,3,4,5,6,7,8,9];
	var answer = 0;

	number.forEach((idx) => {
		if(!numbers.includes(idx)) {
			answer += idx;
		}
	});

	return answer;
}

