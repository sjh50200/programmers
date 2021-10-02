function solution(nums) {
    let answer = 0;
    const arr = [];    
       
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                    arr.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    console.log(arr);
    
    arr.map((value, index) => {
        let isAnswer = true;
        for(let i=2; i<=value/2; i++){
            if(value%i === 0){
                isAnswer = false;
                break;
            }
        }
        if(isAnswer === true) answer++;
    });
    
    return answer;
}