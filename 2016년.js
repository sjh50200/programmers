function solution(a, b) {
    let answer = '';
    let month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let name = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let day = 0;
    
    for(let i=0; i<a-1; i++) {
        day += month[i];
    }
    day+=b;
    if(day%name.length-1 >= 0)
        answer = name[(day%name.length)-1];
    else answer = name[name.length-1];
    return answer;
}