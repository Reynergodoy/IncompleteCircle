import { IncompleteCircle } from './src/incomplete.js';

const circle = new IncompleteCircle(100, 140, 30);

console.log(circle.getDimensions());
// (2) [22.981333293569335, 29.544232590366242]

console.log(circle.allQuadrants());
// [2]
