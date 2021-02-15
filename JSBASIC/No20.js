let draw = (n) => {
    let count = 1;
    let num = "";
    for (let i = 1; i <= (n*2)-1; i++) {
        for (let j = 1; j <= n; j++){
            if(i <= n){
                if( (n+1) - i > j ) {
                    num = num + "_";
                }else{
                    num = num + count;
                    count = count + 1;
                }
            }else{
                if(j <= i-n ) {
                    num = num + "_";
                }else{
                    num = num + count;
                    count = count +1;
                }
                
            }
        }
        num = num + "\n";
        // count = count + 1;
    }
    console.log(num);
}

draw(4);