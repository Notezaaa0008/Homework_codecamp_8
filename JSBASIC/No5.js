let draw = (n) => {
    let num = "";
    for (let i = n; i >= 1; i--) {
        for(let j = 1; j <= n; j++){
            num = num + i ;
        }
        num = num + "\n";
    }
    console.log(num);
}

draw(4);