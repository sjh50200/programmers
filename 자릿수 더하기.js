function solution(n)
{
    let answer = 0;

    while(n >= 10) {
        answer += n%10;
        n = Math.floor(n/10);
    }
    answer+=n;

    return answer;
}