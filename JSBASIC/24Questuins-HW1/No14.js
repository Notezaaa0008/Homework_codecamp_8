let draw = (n) => {
    let num = "";
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++){
            if( i+1 <= j ) {
                num = num + "_";
            }else{
                num = num + "*";
            }
        }
        num = num + "\n";
    }
    console.log(num);
}

draw(4);