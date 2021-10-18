function solution(n) {
    var answer = '';
    let regex = /([0-9])/g;
    let arr = n.toString().match(regex);
    console.log(arr);
    
    arr.sort((a,b) => b-a);
    console.log(arr);
    
    arr.forEach(v => {
        answer+=v;
    })
    
    return Number(answer);
}