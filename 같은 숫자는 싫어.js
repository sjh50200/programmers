function solution(arr)
{
    let answer = [];
    answer.push(arr[0]);
    let final = answer[answer.length-1];
    for(let i=1; i<arr.length; i++) {
        if(final !== arr[i]){
            answer.push(arr[i]);
            final = answer[answer.length-1];
        }
    }

    return answer;
}