let draw = (n) => {
    let count = 1;
    let num = "";
    for (let i = 1; i <= (n*2)-1; i++) {
        for (let j = 1; j <= n; j++){
            if(i <= n){
                if( i < j ) {
                    num = num + "_";
                }else{
                    num = num + count;
                }
            }else{
                if(j>= n-(i-n)+1 ) {
                    num = num + "_";
                }else{
                    num = num + (n-(i-n)); 
                } 
            }
        }
        num = num + "\n";
        count = count +1;
    }
    console.log(num);
}

draw(4);