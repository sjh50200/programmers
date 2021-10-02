function solution(array, commands) {
    let answer = [];
    
    commands.map((value, idx) => {
        let tempArray = array.slice(value[0]-1, value[1]);
        
        tempArray.sort((a,b) => {
            return a-b;
        });//꼭 compareFunction 작성 해주는 것이 좋음 유니코드 비교가 아닌 숫자비교
        if(tempArray[value[2]]) {
            answer.push(tempArray[value[2]-1]);
        }
        else {
            if(tempArray)
                answer.push(tempArray.pop());
        }
    })
    
    return answer;
}