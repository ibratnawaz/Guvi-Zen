import {
    Cricket
} from "./cricket";

let totalScores1: number;
let maxPlayer1: object;
let totalScores2;
let maxPlayer2;

( < HTMLElement > document.getElementById('hit-1')).addEventListener('click', async () => {
    let cricket = new Cricket();
    ( < HTMLButtonElement > document.getElementById('hit-1')).disabled = true;
    await cricket.startGame('table-team-1');
    totalScores1 = cricket.getTotalScores();
    maxPlayer1 = cricket.getMaxScore();
    ( < HTMLButtonElement > document.getElementById('hit-2')).disabled = false;
});

( < HTMLElement > document.getElementById('hit-2')).addEventListener('click', async () => {
    let cricket = new Cricket();
    ( < HTMLButtonElement > document.getElementById('hit-1')).disabled = true;
    ( < HTMLButtonElement > document.getElementById('hit-2')).disabled = true;
    await cricket.startGame('table-team-2');
    totalScores2 = cricket.getTotalScores();
    maxPlayer2 = cricket.getMaxScore();
    ( < HTMLButtonElement > document.getElementById('btn-result')).disabled = false;
    let team = cricket.getTeamWinner(totalScores1, totalScores2);
    if (team == 'TEAM-A') {
        cricket.getManOfMatch(maxPlayer1);
    } else {
        cricket.getManOfMatch(maxPlayer2);
    }

})