import { Point } from "./Point";

export abstract class Shape {
    color : string;
    filled : boolean;
    points : Point[];

    constructor(points : Point[]);
    constructor(points : Point[], color : string, filled: boolean);
    constructor(points: Point[], color? : string, filled?: boolean){
        if(points.length>=3){
            this.points=points;
            if(!color && !filled){
                this.color='green';
                this.filled=true;   
            }else{
                this.color=color;
                this.filled=filled;
            }
        }else{
            throw new Error("Illegal construction, not a shape.");
        }
    }

    toString(){
        var filled = 'filled';
        var pointsString = '';
        for(var i = 0 ; i<this.points.length; i++){
            if(i != this.points.length-1){
                pointsString += this.points[i].toString() + ', '
            }else
            {pointsString += this.points[i].toString()}
        }
        if(!this.filled)
            filled = 'not filled'
        return `A Shape with color of ${this.color} and ${filled}. Points: ${pointsString}.`;
    }

    getPerimeter(){
        var perimeter = 0;
        for(var i = 1; i <= this.points.length; i++){
            if(i== this.points.length){
                perimeter += this.points[i-1].distance(this.points[0]);
            }else {
                perimeter += this.points[i-1].distance(this.points[i]);
            }
        }
        return perimeter;
    }    

    abstract getType(): string;
}
