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

function isEqual(num1: number, num2: number, tolerance: number = Number.EPSILON) {
    return Math.abs(num1 - num2) < tolerance;
  }
  