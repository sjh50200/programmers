function solution(s) {
    let answer = '';
    let center = Math.floor(s.length/2);
    
    if(s.length % 2 === 0) {
        answer += s.charAt(center-1);
    }
    answer += s.charAt(center);
    
    return answer;
}