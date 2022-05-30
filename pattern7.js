let n = 5;

for (let i = n; i > 0; i--){
    let s = ""
    for(let j = 5; j> 0; j--){
        if (i == n){
            s = s + i;
        }
        else{
            s= s + j;
        }

    }
    console.log(s);
}