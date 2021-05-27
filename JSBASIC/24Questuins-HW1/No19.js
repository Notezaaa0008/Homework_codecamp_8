let draw = (n) => {
    
    let num = "";
    for (let i = 1; i <= (n*2)-1; i++) {
        for (let j = 1; j <= n; j++){
            if(i <= n){
                if( (n+1) - i > j ) {
                    num = num + "_";
                }else{
                    num = num + "*";
                }
            }else {
                if(j <= i-n ) {
                    num = num + "_";
                }else{
                    num = num + "*";
                }
                
            }
        }
        num = num + "\n";
    }
    console.log(num);
}

draw(4);