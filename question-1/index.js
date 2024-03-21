// //Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
var score = [2, 3, 5, 6, 13, 4, 1, 7, 9];
var sum = 0;
for (var i = 0; i < score.length; i++) {
    sum += score[i];
}
var avg = sum / score.length;
console.log("SUM BY LOOP", sum);
console.log("AVERAGE BY LOOP", avg);
// by means of function
function sum_of_scores(score) {
    //general array.
    return score.reduce(function (previousvalue, currentvalue) {
        return previousvalue + currentvalue;
    }, 0);
}
console.log("SUM OF SCORES BY FUNCTION:", sum_of_scores(score));
var average = sum_of_scores(score) / score.length;
console.log("AVERAGE OF SCORES BY FUNCTION:", average);
//Author-HUMA MOHSIN
