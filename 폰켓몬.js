function solution(nums) {
    var answer = 0;
    let ponset = new Set();
    
    nums.map((v,idx) => {
        ponset.add(v);
    }) //폰켓몬의 중복을 제거한다.
    
    if(ponset.size >= (nums.length/2)) //생각한 알고리즘
        answer = nums.length/2;
    else answer = ponset.size;
    
    return answer;
}