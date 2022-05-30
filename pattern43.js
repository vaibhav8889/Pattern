let n = 5;
for (let i = 0; i < 5; i++){
    let s = "";
    for(let j =5; j >i; j--){
        s = s + " ";
    }
    for(let k = -i; k <= i;k++ ){
        s = s + Math.abs(k);
    }

    console.log(s);
}