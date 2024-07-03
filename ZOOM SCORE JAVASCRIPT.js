document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'nnAPOp2RdbXvZCAC';
    const footballUrl = `https://api.livescore-api.com/api-client/scores/live.json?key=${apiKey}&sport=football`;
    const basketballUrl = `https://api.livescore-api.com/api-client/scores/live.json?key=${apiKey}&sport=basketball`;
    const tennisUrl = `https://api.livescore-api.com/api-client/scores/live.json?key=${apiKey}&sport=tennis`;

    function fetchScores(url, elementId) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const scoresContainer = document.getElementById(elementId);
                scoresContainer.innerHTML = '';
                data.data.match.forEach(match => {
                    const scoreCard = document.createElement('div');
                    scoreCard.className = 'score-card';
                    scoreCard.innerHTML = `<p>${match.home_name} ${match.score} ${match.away_name}</p><p>Time: ${match.time}</p>`;
                    scoresContainer.appendChild(scoreCard);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchScores(footballUrl, 'football-scores');
    fetchScores(basketballUrl, 'basketball-scores');
    fetchScores(tennisUrl, 'tennis-scores');
});
