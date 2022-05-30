let n = 5;
for (let i = 6; i >= 0; i= i -2){
    let s = "";
    for(let j =5; j >i; j=j-2){
        s = s + " ";
    }
    for(let k = 0; k <= (i);k=k+1 ){
        s = s + (k + 1);
    }
    console.log(s);
}