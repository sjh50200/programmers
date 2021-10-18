function solution(dartResult) {
    let answer = 0;
    let regex = /(\d+[STD][*#]?)/g;
    let arr = dartResult.match(regex);
    let arr2 = [];
    //정규화
    arr.forEach(v => {
        let regex2 = /(\d+)([STD])([*#]?)/;
        arr2.push([v.match(regex2)[1], v.match(regex2)[2], v.match(regex2)[3]]);
    })
    
    let calc = [];
    arr2.forEach((v, idx)=> {
        let sum = 0;
        switch(v[1]) {
            case 'S': sum += Math.pow(v[0], 1); break;
            case 'D': sum += Math.pow(v[0], 2); break;
            case 'T': sum += Math.pow(v[0], 3); break;
        }
        
        switch(v[2]) {
            case '*': {
                sum *= 2; 
                if(idx > 0) calc[idx-1] *= 2;
                break;
            }
            case '#': sum *= -1; break;
        }
        
        calc.push(sum);
    })
    answer = calc.reduce((sum, currValue) => {
        return sum + currValue;
    }, 0);
    return answer;
}