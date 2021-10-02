function solution(absolutes, signs) {
    let answer = 0;
    absolutes.map((number, index) => {
        if(signs[index] !== true)
            number *= -1;
        
        answer += number;
    })
    return answer;
}