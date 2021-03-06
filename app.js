const adviceHeader = document.querySelector('.advice-header');
const adviceText = document.querySelector('.advice-text');
const adviceBtn = document.querySelector('.advice-btn');

// Function that calls the Advice Slip API to get random advice
const getRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayRandomAdvice(data.slip))
    .catch(err => console.log(err));
};

// Function that displays the advice ID and text on the page
const displayRandomAdvice = (data) => {
    adviceHeader.textContent = `Advice #${data.id}`;
    adviceText.textContent = `“${data.advice}”`;
};

// Click event listener on the DOM button
adviceBtn.addEventListener('click', getRandomAdvice);