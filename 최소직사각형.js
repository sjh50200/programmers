function solution(sizes) {
    let answer = 0;
    sizes = sizes.map((v) => {
        if(v[0] < v[1]) {
            let temp;
            temp = v[0];
            v[0] = v[1];
            v[1] = temp;
        }
        return v;
    })
    let cols = sizes.map(v=> {return v[0]});
    let rows = sizes.map(v=> {return v[1]});
    answer = Math.max(...cols) * Math.max(...rows);
    
    return answer;
}