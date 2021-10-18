function solution(N, stages) {
    let success = Array.from(Array(N+1), () => 0);
    let answer = [];
    let failure = [];
    
    stages = stages.map((value) => {return value-1;})
    stages.sort((a,b) => a-b);
    for(let v of stages) {
        success[v]++;
    }  

    for(let i=0; i<N; i++) {
        let sum = 0;
        for(let j=i; j<success.length; j++){
            sum+=success[j];
        }
        if(sum === 0) failure.push(0);
        else failure.push(success[i]/sum);
    }

    for(let i=0; i<failure.length; i++) {
        let index = failure.indexOf(Math.max(...failure))
        failure[index] = -1;
        answer.push(index+1);
    }
    return answer;
}