

let answerNow = 0, correct = 0, wrong = 0;
const answer = ['', '', '', ''];
const buttons = ['', '', '', ''];
let score = 0;
let correctE, wrongE, scoreE;

document.addEventListener("DOMContentLoaded", function () {

    for (let i = 0; i < answer.length; i++) {
        answer[i] = document.querySelector(`#a${i + 1}`);
    }
    for (let i = 1; i < buttons.length; i++) {
        buttons[i] = document.querySelector(`#btn${i + 1}`);
    }

    correctE = document.querySelector('#correct');
    wrongE = document.querySelector('#wrong');
    scoreE = document.querySelector('#score');
    correctE.innerHTML = correct;
    wrongE.innerHTML = wrong;
    scoreE.innerHTML = score;

    updateAns();






});

function updateAns() {
    let question = document.querySelector("#contentQu")
    question.innerHTML = questions[answerNow];
    for (let i = 0; i < answer.length; i++) {
        answer[i].innerHTML = answers[answerNow][i + 1];
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;

    }



}

function checkAns(id_btn) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    if (correctAnswers[answerNow] == id_btn) {
        // alert("Correct!");
        score += 20;
        correct++;
        correctE.innerHTML = correct;
        scoreE.innerHTML = score;
    }
    else {
        // alert("Wrong!");
        wrong++;
        wrongE.innerHTML = wrong;

    }


    answerNow++;
    if (answerNow < 5) {
        updateAns();
    }
    else {
setTimeout(function() {
        alert("If you want to restart the game refresh the page...");}, 500)
    }

}