function solution(participant, completion) {
    let answer;
    participant = participant.sort();
    completion = completion.sort();
    
    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return answer = participant[i];
        }
    }
    
    
    // completion.map((complete) => {
    //     for(let i=0; i<participant.length; i++){
    //         if(complete === participant[i]) {
    //             answer.splice(i, 1);
    //             break;
    //         }
    //     }
    // })
    // console.log(answer);
    
//     participant.map((value, idx)=> {
//         partMap.push({
//             name: value,
//             isComplete: false
//         })
//     });
    
//     completion.map((value, idx) => {
//         for(let i=0; i<partMap.length; i++) {
//             if(value === partMap[i].name && partMap[i].isComplete === false) {
//                 partMap[i].isComplete = true;
//                 break;
//             }
//         }
//     });
    
//     answer = partMap.find(v => v.isComplete === false).name;
    
    return answer.toString();
}