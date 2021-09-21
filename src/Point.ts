export class Point {
    x: number;
    y: number;
   
    // Normal signature with defaults
    // Overloads
    constructor(x: number, y: number);
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }

    distance();
    distance(other: Point);
    distance(x: number, y: number);
    distance(otherx? : any, y?: number){

        if( typeof otherx === 'number') {
            return Math.sqrt( Math.pow((this.x-otherx), 2) + Math.pow((this.y-y), 2) );
        }
        if( typeof otherx != 'undefined') {
            return Math.sqrt( Math.pow( (this.x - otherx.x),2) + Math.pow((this.y-otherx.y), 2));
        }
        return Math.sqrt(Math.pow(this.x,2 )+ Math.pow(this.y,2));
    }

  }