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

console.groupEnd('Triangle')