let n = 5;
for (let i = 1; i <= 10; i=i+2){
    for(let j =-(n-1); j <n; j++){
        if(-i <= j && j <= i-2){
            process.stdout.write(String(i));
        }else{
            process.stdout.write(" ")
        }
    }
    
    console.log();
}