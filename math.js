console.group('Square')

const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.log({
    squareSide,
    squarePerimeter,
    squareArea,
});

calculateSquare = (side) => {
    return {
        perimeter: side * 4,
        perimeter: side * side,
    };
}

console.groupEnd('Square')


console.group('Triangle')

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleSideBase = 4; 
const triangleHeight = 5.5;

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleSideBase;
const triangleArea = (triangleSideBase * triangleHeight) / 2;

console.log({
    triangleSide1,
    triangleSide2,
    triangleSideBase,
    triangleHeight,
    trianglePerimeter,
    triangleArea,
});

calculateTriangle = (side1, side2, sideBase, height) => {
    return {
        perimeter: (side1 + side2 + sideBase),
        area: (sideBase * height) / 2,
    };
}

calculateTriangleHeight = (sides, base) => {
    if (sides == base) {        
       console.warn('This is not an Isosceles Triangle')
    } else {
       const height = Math.sqrt((sides ** 2) - ((base ** 2)) / 4)
       return {height}
    }
}

calculateScalene = (side1, side2, side3) => {

    let a = side1;
    let b = side2;
    let c = side3;

    if (a == b || b == c || c == a) {
        return false;
      }


    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    let height_a = Math.floor(2 * area / a);
    let height_b = Math.floor(2 * area / b);
    let height_c = Math.floor(2 * area / c);
  
    return height_a;
}



console.groupEnd('Triangle')


console.group('Circle')

const circleRadio = 3
const circleDiameter = circleRadio * 2;
const PI = 3.1415;
const circunference = circleDiameter * PI;
const circleArea = (circleRadio ** 2) * PI;

console.log({
    circleRadio,
    circleDiameter,
    PI,
    circunference,
    circleArea,
})



calculateCircle = (radio) =>{
    const diameter = radio * 2;
    const radioSquared = Math.pow(radio, 2);

    return{
        circunference: diameter * Math.PI,
        area: radioSquared * Math.PI,
    };
}

console.groupEnd('Circle')

