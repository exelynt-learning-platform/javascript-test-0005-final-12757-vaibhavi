function printFloydsTriangle(rows) {
    let num = 1;
    let result = "";

    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num++; 
        }
        result += row.trim() + "\n";
    }

    console.log(result);
}


printFloydsTriangle(5);