function solution(a, b) {
    var answer = 0;
    a.map((value, idx) => {
        answer += value * b[idx];
    })
    return answer;
}