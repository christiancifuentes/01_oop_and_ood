import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {

    constructor(point1: Point, point2: Point, point3: Point, color : string, filled: boolean);
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?:boolean){
        super([point1,point2,point3],color,filled);
    }

    toString(){
        return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`
    }
    getType(){
        var equilateral = `equilateral triangle`;
        var isosceles = `isosceles triangle`;
        var scalene = `scalene triangle`;
        var a = (Math.round(this.points[0].distance(this.points[1]) * 100) / 100).toFixed(2); 
        var b = (Math.round(this.points[1].distance(this.points[2]) * 100) / 100).toFixed(2); 
        var c = (Math.round(this.points[2].distance(this.points[0]) * 100) / 100).toFixed(2); 
        if(a == b && b == c && c == a){
            return equilateral;
        }else{
            if(a != b && b != c && c != a){
                return scalene;
            }else{
                return isosceles;
            }
        }
    }
}
