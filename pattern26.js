let n = 5;

for (let i = 1; i <= 5; i++){
    let s = " "
    for(let k = 5; k>=1; k--){
        if(i < k){
            s = s + " ";
        }
        else{
            s = s +k;
        }
    }
    // for(let j = 1; j<= i; j++){
      
    // }
    
    console.log(s);
}