function solution(lottos, win_nums) {
    let zeroNum = 0;
    let matches = 0;
    let lowestCase = 0, highestCase = 0;
    var answer = [];
    
    lottos.forEach((idx) => {
        if(idx === 0)
            zeroNum++;
    });
    
    win_nums.forEach((idx) => {
        lottos.forEach((idx2) => {
            if(idx === idx2)
                matches++;
        });
    });
    
    lowestCase = matches; highestCase = matches + zeroNum;
    
    const getRate = (num_matches) => {
        let rate = 0;
        switch(num_matches) {
            case 6 : rate = 1;
                break;
            case 5 : rate = 2;
                break;
            case 4: rate = 3;
                break;
            case 3: rate = 4;
                break;
            case 2: rate = 5;
                break;
            default : rate = 6;
                break;
        }
        return rate;
    }
    
    answer.push(getRate(highestCase));
    answer.push(getRate(lowestCase));
    
    return answer;
}