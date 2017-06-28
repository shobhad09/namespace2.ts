///<reference path="design.ts"/>
///<reference path="circle.ts"/>
///<reference path="triangle.ts"/>
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
