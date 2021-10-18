function solution(s){
    let answer = true;
    let string = s.toLowerCase().split("");
    let count = 0;
    
    string.forEach(v => {
        if(v === 'p') count++;
        if(v === 'y') count--;
    })
    
    if(count!=0) answer = false;

    return answer;
}