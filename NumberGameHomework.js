var numText = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
var numbers = [];
var numCorrect = 0;
var secLeft = 45;

module.exports.numbers = function (numbersCookie, numCorrectCookie) {
    console.log(numbersCookie);
    if (numCorrectCookie == null) {
        numCorrect = 0;
    } else {
        numCorrect = numCorrectCookie;
    }
    //numbers = [];
    if (numbersCookie == null) {
        for (var i = 0; i < numText.length; i++) {
            var number = new Number(numText[i], i, 0, false);
            //        console.log(number);
            numbers.push(number);
        }
    } else {
        numbers = numbersCookie;
    }
    
module.exports.initGame = initGame(); {
    console.log(numbers);
}
module.exports.Number = function(word, digit, errorNum, placed) {
    this.digit = digit;
    this.word = word;
    this.placed = placed;
    this.errorNum = errorNum;
};
module.exports = function initGame() {
    console.log("initializing");
    var ulText = $('#numName');
    var ulNum = $('#numNumeric');
    for (var i = 0; i < numbers.length; i++) {
        ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
        ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
        if (numbers[i].placed) {
            $("#n" + i).hide();
        }
    }