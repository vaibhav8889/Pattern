let n= 5;
for (let i =1; i<= n; i++){
    for (let j= -n; j< n; j=j+1){
        if (-i<=j && j<=i-2){
            process.stdout.write(String(i));
        }
        else{
            process.stdout.write(" ");
        }
    }
    console.log();
}