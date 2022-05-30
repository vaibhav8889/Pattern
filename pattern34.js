let n = 5;
for (let i = 0; i < 5; i++){
    
    // for(let j =5; j >i; j--){
    //     s = s + " ";
    // }
    for(let k = -n; k <= n; k= k+1){
        if( -i<= k && k<=i){
        process.stdout.write("*")
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();  
}