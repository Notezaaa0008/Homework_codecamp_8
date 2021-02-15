let draw = (n) => {
    
    let num = "";
    for (let i = 1; i <= (n*2)-1; i++) {
        for (let j = 1; j <= n; j++){
            if(i <= n){
                if( i < j ) {
                    num = num + "_";
                }else{
                    num = num + "*";
                }
            }else{
                if(j>= n-(i-n)+1 ) {
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