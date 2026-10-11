// Save whether a question was correct or incorrect
function saveAnswer(questionNumber, isCorrect) {

    if (isCorrect) {
        localStorage.setItem("question" + questionNumber, "correct");
    } else {
        localStorage.setItem("question" + questionNumber, "incorrect");
    }
}


// Count how many questions were correct
function getScore() {

    let score = 0;

    for (let i = 1; i <= 5; i++) {

        if (localStorage.getItem("question" + i) === "correct") {
            score++;
        }

    }

    return score;
}