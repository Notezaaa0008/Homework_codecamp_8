let draw = (n) => {
    let count = 1;
    let num = "";
    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++){
            num = num + count ;
            count = count + 1;
        }
        num = num + "\n";
        
    }
    console.log(num);
}

draw(4);