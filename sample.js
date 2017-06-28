///<reference path="design.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
///<reference path="design.ts"/>
var Drawing;
(function (Drawing) {
    var Triangle = (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
///<reference path="design.ts"/>
///<reference path="circle.ts"/>
///<reference path="triangle.ts"/>
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
