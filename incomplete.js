import { Circle } from 'circle.js';

export class IncompleteCircle {
    constructor(start, end, radius){
        this.start = start;
        this.end = end;
        this.radius = radius;
    }
    
   /**
    *
    * Gets all quadrants present in the incomplete circle
    *
    */
    allQuadrants () {
        const startQuad = Circle.getQuadrant(this.start);
        const endQuad = Circle.getQuadrant(this.end);
        let quadrants = [startQuad];
        if(( Circle.getNatural(this.start) <= Circle.getNatural(this.end) ) && ( startQuad === endQuad )) return quadrants;
        let i = ( startQuad + 1 );
        while((i % 5) !== endQuad){
            if(i % 5 !== 0) quadrants.push(i % 5);
            i++;
        }
        quadrants.push(endQuad);
        return quadrants;
    }
    
    getDimensions () {
        if(this.start === this.end) return null;
        const quadrants = this.allQuadrants();
        const quantity = quadrants.length;
        const start = quadrants[0];
        const radius = this.radius;
        const firstAngle = Circle.getRadians(this.start);
        const lastAngle = Circle.getRadians(this.end);
        if(quantity === 1){
            if(start === 1 || start === 3){
                const xWing = radius * Math.abs(Math.cos(firstAngle));
                const yWing = radius * Math.abs(Math.sin(lastAngle));
                return [xWing, yWing];
            }
            if(start === 2 || start === 4){
                const xWing = radius * Math.abs(Math.cos(lastAngle));
                const yWing = radius * Math.abs(Math.sin(firstAngle));
                return [xWing, yWing];
            }
        }
        if(quantity === 2){
            if(start === 1 || start === 3){
                const wing = Math.abs(Math.cos(firstAngle)) + Math.abs(Math.cos(lastAngle));
                return [wing, 2 * radius];
            }
            if(start === 2 || start === 4){
                const wing = Math.abs(Math.sin(firstAngle)) + Math.abs(Math.sin(lastAngle));
                return [2* radius, wing];
            }
        }
        if(quantity === 3){
            if(start === 1 || start === 3){
                const xWing = radius * ( 1 + Math.abs(Math.cos(firstAngle)) );
                const yWing = radius * ( 1 + Math.abs(Math.sin(lastAngle)) );
                return [xWing, yWing];
            }
            if(start === 2 || start === 4){
                const xWing = radius * ( 1 + Math.abs(Math.cos(lastAngle)) );
                const yWing = radius * ( 1 + Math.abs(Math.sin(firstAngle)) );
                return [xWing, yWing];
            }
        }
        if(quantity === 4){
            if(start === 1 || start === 3){
                const wing = Math.max(Math.abs(Math.cos(firstAngle)), Math.abs(Math.cos(lastAngle)));
                return [radius * ( 1 + wing ), 2 * radius];
            }
            if(start === 2 || start === 4){
                const wing = Math.max(Math.abs(Math.sin(firstAngle)), Math.abs(Math.sin(lastAngle)));
                return [2 * radius, radius * ( 1 + wing )];
            }
        }
        if(quantity === 5){
            return [2 * radius, 2 * radius];
        }
    }
}
