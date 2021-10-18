function solution(x) {
    var answer = true;
    let check = x;
    let sum = 0;
    
    while(check >= 10){
        sum += (check % 10);
        check = Math.floor(check/10);
    }
    sum+=check;
    
    if(x%sum !== 0) answer = false;
    return answer;
}