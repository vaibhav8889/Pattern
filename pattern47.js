let n = 5;
for (let i = 5; i >= 1; i--){
    let s = "";
    for(let j =5; j >i; j--){
        s = s + " ";
    }
    for(let k = 0; k < (2*i)-1;k++ ){
        s = s + "*";
    }
    console.log(s);
}