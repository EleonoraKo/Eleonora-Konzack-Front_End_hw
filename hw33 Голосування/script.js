// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
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



