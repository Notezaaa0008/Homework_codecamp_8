let draw = (n) => {
    let num = "";
    let count = 0;
    for (let i = 1; i <= (n * 2) - 1; i++) {
        for (let j = 1; j <= (n * 2) - 1; j++) {
            if (i < n) {
                if (j >= n - count && j <= n + count) {
                    num = num + "*";
                } else {
                    num = num + "_";
                }
            } else if (i == n) {
                count = 0;
                num = num + "*";
            } else {

                if (j <= count || j >= ((n * 2) - count)) {
                    num = num + "_";
                } else {
                    num = num + "*";
                }
            }
        }
        num = num + "\n";
        count = count + 1;
    }
    console.log(num);
}

draw(4);