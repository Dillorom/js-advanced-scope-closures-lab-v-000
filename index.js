function produceDrivingRange(block){
    return function(start, end){
        let rangeCheck = (parseInt(end)-parseInt(start))
        if (rangeCheck < block){
            return `within range by ${block - rangeCheck}`
        } else {
            return `${rangeCheck - block} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage){
    return function(totalBill){
        return totalBill * percentage
    }
}