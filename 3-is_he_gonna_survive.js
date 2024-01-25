//DAY 3/366

function hero(bullets, dragons)
{
    if(bullets/2 >= dragons)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// function hero(bullets, dragons)
// {
//     return (bullets / 2 >= dragons) ? true : false;
// }

console.log(hero(10,5))