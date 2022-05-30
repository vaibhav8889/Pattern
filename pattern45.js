let n = 5;
for (let i = 1; i <= 5; i++){
    let s = "";
    for(let j =5; j >i; j--){
        s = s + " ";
    }
    for(let k = 1; k <= i*2-1;k++){
        if(k <= i){
        s = s + k;
    }else{
        s = s - 1;
    }
}
    console.log(s);
}