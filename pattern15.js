let n = 5;

for (let i = n; i > 0; i--){
    let s = ""
    for(let j = 1; j<= i; j++){
    s = s + "*"
    }
    console.log(s);
}