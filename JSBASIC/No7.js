let draw = (n) => {
    let count = 0;
    let num = "";
    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++){
            num = num + ((n*n) - count) ;
            count = count + 1 
        }
        num = num + "\n";
    }
    console.log(num);
}

draw(4);