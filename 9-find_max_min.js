// DAY 9/366

var min = function(list){
    let minvalue = list[0];
    for(let i = 1; i < list.length; i ++){
        if(minvalue > list[i]){
            minvalue = list[i];
        }
    }
    return minvalue;
}

var max = function(list){
    let maxvalue = list[0];
    for(let i = 1; i < list.length; i ++){
        if(maxvalue < list[i]){
            maxvalue = list[i];
        }
    }
    return maxvalue;
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4,6,2,1,9,63,-134,566]))