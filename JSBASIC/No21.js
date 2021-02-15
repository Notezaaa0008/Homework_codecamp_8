let draw = (n) => {
    let num = "";
    let count = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n*2)-1; j++){
            if(j >= n-count && j <= n+count) {
                num = num + "*";
            }else {
                num = num + "_";
            }
        }
        num = num + "\n";
        count = count + 1;
    }
    console.log(num);
}

draw(4);