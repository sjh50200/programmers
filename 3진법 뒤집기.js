function solution(n) {
    let answer = 0;
    let arr = [];
    
    while(n/3>=2) {
        arr.push(n%3);
        n = Math.floor(n/3);
        console.log(n);
    }
    if(n/3>=1) {
        arr.push(n%3);
        arr.push(Math.floor(n/3));
    }
    else
        arr.push(n%3);
    arr = arr.reverse();
    console.log(arr);
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== 0)
            answer += arr[i] * Math.pow(3, i);
    }
    
    return answer;
}