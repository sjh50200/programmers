function solution(arr) {
    var answer = [];
    let min = Math.min(...arr);
    
    while(arr.indexOf(min) !== -1) {
        arr.splice(arr.indexOf(min), 1);
    }
    
    answer = arr;
    
    if(arr.length === 0) answer.push(-1);
    
    return answer;
}