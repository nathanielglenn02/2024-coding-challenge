//DAY 6/366

function maps(x){
    let result = [];
    for(let i = 0; i < x.length; i++){

        result.push(x[i] * 2); //push untuk memasukkan ke array
                              //dengan syarat harus ada array kosong sebagai template
    }
    return result;
}

console.log(maps([4, 1, 1, 1, 4]));