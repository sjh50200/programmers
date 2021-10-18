function solution(n) {
    var answer = -1;
    const sqrt = Math.sqrt(n);
    
    if(sqrt % 1 === 0) //제곱근 
        answer = Math.pow(sqrt+1, 2);
    
    return answer;
}