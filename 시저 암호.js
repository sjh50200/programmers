function solution(s, n) { //알파벳 26개
    let answer = '';
    let arr = [];
    for(let v of s) {
        arr.push(v);
    }
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === ' ') continue;
        if(arr[i] === arr[i].toUpperCase()) { //대문자이면
            let letter = arr[i].toLowerCase();
            let lettercode = 0;
            if(letter.charCodeAt(0) + n > 122)
                lettercode = (letter.charCodeAt(0) + (n-1) - 122) + 97;
            else lettercode = letter.charCodeAt(0) + n;
            arr[i] = String.fromCharCode(lettercode).toUpperCase();
        }
        else if(arr[i] === arr[i].toLowerCase()) {//소문자이면
            let lettercode = 0;
            if(arr[i].charCodeAt(0) + n > 122)
                lettercode = (arr[i].charCodeAt(0) + (n-1) - 122) + 97;
            else lettercode = arr[i].charCodeAt(0) + n;
            arr[i] = String.fromCharCode(lettercode);
        }
    }
    
    arr.forEach(v => {
        answer += v;
    })
    return answer;
}