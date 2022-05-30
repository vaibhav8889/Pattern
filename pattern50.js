let n = 5;
for (let i = 6; i >= 0; i= i -2){

    for(let k = n; k >= -1;k=k-1 ){
        if(k < i)
        process.stdout.write(String(String.fromCharCode(65 +i)));
    else{
        process.stdout.write(" ");
    }
}
    console.log();
}