let draw = (n) => {
    let num = "";
    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++){
            num = num + "*";
        }
        num = num + "\n";
    }
    console.log(num);
}

draw(4);