let n = 5;
for (let i = 1; i <= 5; i++){
    let s = "";
    for(let j =5; j >i; j--){
        s = s + " ";
    }
    for(let k = 1; k <= (2*i)-1;k++ ){
        s = s + k;
    }
    console.log(s);
}