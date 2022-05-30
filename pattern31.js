let n = 5;

for (let i = 5; i >= 1; i--){
    let s = ""
    for(let k = 1; k<=i; k++){
        if(i < n){
            s = s + " ";

        }
        s = s + k;
        
    }
    //for(let j = 1; j<= i; j++){
       
    //}
    
    console.log(s);
}