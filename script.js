function findWineer(arr){
    let playerA = arr.filter(e=> e===1).length
    let playerB = arr.filter(e=> e===2).length
    
    if(playerA>playerB)return `player A won by ${playerA} rounds`  
    if(playerB>playerA)return `player B won by ${playerB} rounds`
    return `Its a Tie `
        
    }

Whowon([1,2,2,1,1]);