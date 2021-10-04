//테스트 케이스 짜증났음 ***

function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Set();
    
    
    //오름차순 왜 걸러줘야해ㅜㅜ
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    //수업 정상적으로 들을 수 있는 케이스들 Set에 추가해서 중복 원천 봉쇄
    for(let i=1; i<=n; i++) {
        if(!lost.includes(i))
            arr.add(i);
    }
    
    //만약 도난 당한 사람 = 여유복 있는 사람인 경우 여유복 배열에서 제거
    //lost 순회중이니 lost 건들면 위험함
    for (let v of lost) {
        if(reserve.length === 0)
            break;
        if(reserve.includes(v)) {
            reserve.splice(reserve.indexOf(v), 1);
            arr.add(v);
            continue;
        }
    }
    //이제 진짜 제공할 수 있는 사람만 남았음
    
    //하나씩 앞 뒤로 찾기
    for (let v of lost) {
        if(reserve.length === 0)
            break;
        if(reserve.includes(v-1)) {
             reserve.splice(reserve.indexOf(v-1), 1);
             arr.add(v);
             continue; //forEach문에서는 continue 사용 불가 대신 return 으로!
          }
         if(reserve.includes(v+1)) {
                reserve.splice(reserve.indexOf(v+1), 1);
                arr.add(v);
                continue;
            }
        }

    answer = arr.size;
    
    return answer;
}