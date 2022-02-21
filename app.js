const getRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

getRandomAdvice();