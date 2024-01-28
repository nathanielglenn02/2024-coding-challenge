//DAY 5/366

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(mpg * fuelLeft > distanceToPump)
    {
        return true;
    }
    else{
        return false;
    }
  };


