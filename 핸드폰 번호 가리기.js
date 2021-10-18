function solution(phone_number) {
    var answer = '';
    let regex = /[0-9]{4}$/g;
    
    for(let i=0; i<phone_number.length-4; i++) {
        answer += '*';
    }
    answer += phone_number.match(regex);
    
    return answer;
}