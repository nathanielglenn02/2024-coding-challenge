//CODING CHALLENGE
//TEST CODE DAY-1

// CARA 1
function grow(x)
{
    let result = x[0];
    for(let i = 1 ; i < x.length; i++)
    {
        /* result = x[i] * result; */
        result *= x[i];
    }
    return result
}

// CARA 2
function grow(x){
    const result = x.reduce((acc,curr) => acc * curr, 1);
    return result;
}

return x.reduce((acc,curr) => acc * curr, 1);

console.log(grow([1,2,3,4]))