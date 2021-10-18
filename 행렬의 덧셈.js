function solution(arr1, arr2) {
    let answer = [[]];

    answer = arr1.map((v, idx) => {
        let temp = v.map((num, idx2) => {
          return num+arr2[idx][idx2];  
        })
        return temp;
    })
    
    return answer;
}