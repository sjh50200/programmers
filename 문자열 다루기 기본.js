function solution(s) {
    let answer = true;
    
    if(s.length !== 4 && s.length !== 6) {
        answer = false;
        return answer;
    }
    
    for(let i=0; i<s.length; i++) {
        if(isNaN(s.charAt(i))) {
            answer = false;
            break;
        }
    }
    
    return answer;
}