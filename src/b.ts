/// <reference path="a.ts"/>

namespace Shape {
    export function square(x: number) {
        return x * x;
    }
}
console.log(Shape.square(1));
console.log(Shape.circle(1));