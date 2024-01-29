//DAY 6/366

function monkeyCount(n) {
    let result = [];
    for(let i = 1; i < n+1; i++) //n+1 karena start dari index 1
    {
        result.push(i);
    }
    return result;
}

console.log(monkeyCount(3));