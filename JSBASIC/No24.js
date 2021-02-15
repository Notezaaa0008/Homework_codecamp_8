let draw = (n) => {
    let num = "";
    let count = 0;
    let num1 = 1;
    for (let i = 1; i <= (n*2)-1; i++) {
        for (let j = 1; j <= (n*2)-1; j++){
            if (i <= n){
                if(j >= n-count && j <= n+count) {
                    num = num + num1;
                    num1 = num1 +1;
                }else {
                    num = num + "_";
                }
            }else {
                if(j <= count-3 || j >=((n*2)-(count-3))) {
                    num = num + "_";
                }else {
                    num = num + num1;
                    num1 = num1 +1;
                }  
            }
        }
        num = num + "\n";
        count = count + 1;
    }
    console.log(num);
}

draw(4);