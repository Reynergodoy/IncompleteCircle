export class Circle {
    /**
     *
     *   Takes angles outside the range of [0 ; 360] and coerces them inside the boundary
     *
     *   Example: -90° would be 360 + ( - 90 ) => 270;
     *
     *   But we still suffer from negative numbers that have a range higher than 360,
     * therefore we use the modulo operation to put them into an acceptable range ( % 360 );
     *
     *   Example: 360 + ( - 370 % 360 ) => 360 + ( - 10 ) => 350;
     *
     *   But we also suffer from positive numbers that have a range that exceeds the maximum,
     * therefore we also add one more modulo to the end of it;
     *
     *   Example: ( 360 + ( + 370 % 360 ) ) % 360 => ( 360 + ( + 10 ) ) % 360 => 370 % 360 => 10
     *
     */
    static getNatural (angle) {
      return (360 + (angle % 360)) % 360;
    }
    
   /**
    *
    *   Gets the quadrant of the angle by coercing the angle into the acceptable range, followed by the division
    * of the boundary angle of each quadrant ( 90° ) and call of Math.ceil function, so all numbers can be put into
    * [1 ; 4] range
    *
    */
    static getQuadrant (angle) {
      return Math.floor(Circle.getNatural(angle) / 90) + 1;
    }
    
   /**
    *
    *   Transform degrees into radians
    *
    */
    static getRadians (degrees) {
      return degrees * Math.PI / 180;
    }
}
