//DAY 5/366

function sum (numbers) {
    if(numbers.length == [])
    {
        return 0;
    }
    else
    {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++)
        {
            result += numbers[i]
        }
        return result;
    }
};

console.log(sum([1,2,3,4]));