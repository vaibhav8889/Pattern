let n = 5;

for (let i = 5; i >= 1; i--){
    let s = ""
    for(let j = n; j>= 1; j--){
        if (j > i){
            s = s + " "
        }
        else{
            s = s + i
        }
    }
    
    console.log(s);
}