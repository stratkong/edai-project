function degToRad(degrees: number)
{
    return degrees * (Math.PI/180)
}

function radToDeg(radians: number)
{
    return 180 * (radians/Math.PI)
}

function roundOff(num: number, precision: number)
{
    let multiplier = Math.pow(10, precision)
    return Math.round(num*multiplier)/multiplier
}

function checkEqual(num1: number, num2: number)
{
    if (num1 === num2)
    {
        return true
    }
    
    else
    {
        return false
    }
}



