const votingData = {
    'first-emoji-count': 0,
    'second-emoji-count': 0,
    'third-emoji-count': 0,
    'fourth-emoji-count': 0,
    'fifth-emoji-count': 0
};

const parentElement = document.getElementById('voting');




parentElement.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const elementID = clickedElement.parentElement.id;
    votingData[elementID]++;

    updateResults();
});

function updateResults() {
    for (const elementID in votingData) {
        const count = votingData[elementID];
        const countElement = document.getElementById(elementID).querySelector('p');
        countElement.textContent = count;
    }
}



