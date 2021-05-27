let draw = (n) => {
    let count = n;
    let num = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++){
            if(count == j) {
                num = num + "_";
            }else{
                num = num + "*";
            }
        }
        num = num + "\n";
        count = count - 1;
    }
    console.log(num);
}

draw(4);