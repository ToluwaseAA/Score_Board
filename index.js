let teama = 0;
let teamb = 0;
const teamAScore = document.getElementById("team-a-score");
const teamBScore = document.getElementById("team-b-score");

teamAScore.textContent = teama;
teamBScore.textContent = teamb;

function updateScore(element, value) {
    element.textContent = value;
    element.classList.add('score-updated');
    setTimeout(() => element.classList.remove('score-updated'), 400);
}

function resetScores() {
    teama = 0;
    teamb = 0;
    updateScore(teamAScore, teama);
    updateScore(teamBScore, teamb);
}

function plus1TeamA() {
    teama += 1;
    updateScore(teamAScore, teama);
}

function minus1TeamA() {
    if (teama > 0) {
        teama -= 1;
    }
    updateScore(teamAScore, teama);
}

function minus1TeamB() {
    if (teamb > 0) {
        teamb -= 1;
    }
    updateScore(teamBScore, teamb);
}

function plus3TeamA() {
    teama += 3;
    updateScore(teamAScore, teama);
}

function plus3TeamB() {
    teamb += 3;
    updateScore(teamBScore, teamb);
}

function plus1TeamB() {
    teamb += 1;
    updateScore(teamBScore, teamb);
}