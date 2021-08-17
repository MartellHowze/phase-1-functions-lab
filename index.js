const hq = 42;



function distanceFromHqInBlocks(pickup){
 if(pickup > hq){
     return pickup - hq
    }
else{
    return hq - pickup
}

}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264

}

function distanceTravelledInFeet(start, stop){
    if(start > stop){
        return (start - stop) * 264
    } else if(start < stop){
        return (stop - start) * 264
    }

}

function calculatesFarePrice(start, stop){
    const totalFeet = distanceTravelledInFeet(start, stop)
    

    if(totalFeet < 400){
        return 0
  
    }else if((totalFeet > 400) && (totalFeet < 2000)){
       
        return (totalFeet - 400) * .02
   
    }else if(totalFeet > 2500){
        return 'cannot travel that far'
    }else if (totalFeet > 2000){
        return 25
    }
}