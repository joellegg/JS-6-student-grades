// Start with array of random scores in your JavaScript
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scores_a = 0;
var scores_b = 0;
var scores_c = 0;
var scores_d = 0;
var scores_f = 0;

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.
for (var i = 0; i < scores.length; i++) {
    if (scores[i] > 90 && scores[i] <101) {
        scores_a += 1;
    } else if (scores[i] > 80 && scores[i] < 91) {
        scores_b += 1;
    } else if (scores[i] > 70 && scores[i] < 81) {
        scores_c += 1;
    } else if (scores[i] > 60 && scores[i] < 71) {
        scores_d += 1;
    } else {
        scores_f += 1;
    }
}
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Use console.log to output the following criteria:

// 1.   How many of each grade?
console.log("There are " + scores_a + " A's");
console.log("There are " + scores_b + " B's");
console.log("There are " + scores_c + " C's");
console.log("There are " + scores_d + " D's");
console.log("There are " + scores_f + " F's");

// 2.   What is the lowest grade?
console.log(Math.min(...scores));

// 3.   What is the highest grade?
console.log(Math.max(...scores));
