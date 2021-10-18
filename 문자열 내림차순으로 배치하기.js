function solution(s) {
    var answer = "";
    let sarray = s.split("");

    sarray.forEach(v => console.log(v.charCodeAt(0)));
    
    sarray.sort((a, b) => a.charCodeAt(0) > b.charCodeAt(0) ? -1 : 0);
    
    sarray.forEach(v => answer+=v);
    
    return answer;
}