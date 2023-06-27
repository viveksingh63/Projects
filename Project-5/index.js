
const questionEl = document.getElementById('question');
const questionFormEl = document.getElementById('questionForm');
const scoreEl = document.getElementById('score');

let storedAnswer;
let score = localStorage.getItem('score');


const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 10);
    const randomNumber2 = randomNumber(1, 10);
    // const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2}`;
    // const answer = randomNumber1 * randomNumber2;
    const questionType = randomNumber(1, 4);
    let question;
    let answer;

    switch (questionType) {
        case 1:
            question = `Q. What is ${randomNumber1} multiply by ${randomNumber2}`;
            answer = randomNumber1 * randomNumber2;
            break;
        case 2:
            question = `Q. What is ${randomNumber1} added by ${randomNumber2}`;
            answer = randomNumber1 + randomNumber2;
            break;
        case 3:
            question = `Q. What is ${randomNumber1} subtracted by ${randomNumber2}`;
            answer = randomNumber1 - randomNumber2;
            break;
        case 4:
            question = `Q. What is ${randomNumber1} divided by ${randomNumber2}`;
            answer: randomNumber1 / randomNumber2;


        default:
            break;
    }
    return { question, answer };
};

const showQuestion = () => {
    const { question, answer } = generateQuestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;
    storedAnswer = answer;
};
showQuestion();

const checkAnswer = (event) => {
    event.preventDefault();

    const formData = new FormData(questionFormEl);
    const userAnswer = parseInt(formData.get('answer'));

    if (userAnswer == storedAnswer) {
        score += 1;
        Toastify({
            text: `Right Answer, The Correct Answer is ${storedAnswer}`,
            className:"info",
            position: "center",
            gravity:"top",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
    } else {
        score -= 1;
        Toastify({
            text: `Wrong Answer, The Correct Answer is ${storedAnswer}`,
            className:"info",
            position: "center",
            gravity:"top",
            style: {
              background: "linear-gradient(to right, #e33217, #ff001e)",
            },
          }).showToast();
    }
    scoreEl.innerText = score;
    localStorage.setItem('score', score);
    event.target.reset();
    showQuestion();
}