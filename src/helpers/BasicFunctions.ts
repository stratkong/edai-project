export function degToRad(degrees: number) {
  return degrees * (Math.PI / 180)
}

export function radToDeg(radians: number) {
  return 180 * (radians / Math.PI)
}

export function roundOff(num: number, precision: number) {
  let multiplier = Math.pow(10, precision)
  return Math.round(num * multiplier) / multiplier
}

export function isEqual(
  num1: number,
  num2: number,
  tolerance: number = Number.EPSILON
) {
  return Math.abs(num1 - num2) < tolerance
}

export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
