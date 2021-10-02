function solution(answers) {
    var answer = [];
    let pattern = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    let count = [0, 0, 0];
    let temp;
    
    pattern.map((oCount, idx) => {
        count[idx] = answers.filter((value, idx_index) => {
            return value === pattern[idx][idx_index % pattern[idx].length]
        }).length;
    })
    temp = [...count]; //깊은 복사를 해주면 참조값이 달라진다!! 기억하기
    count = count.sort((a, b) => {return b-a} );
    
    temp.map((v, idx) => {
        if(v === count[0]) answer.push(idx+1);
    })
    return answer;
}