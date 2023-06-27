const calculateformEl = document.getElementById('CalculateForm');
const resultEl = document.getElementById('result');


const calculateMarks = (event) => {

    const maxMarks = 400;
    event.preventDefault();
    const formData = new FormData(calculateformEl);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = +value;
    })





    const totalMarks = data.maths + data.science + data.hindi + data.english;
    const percentage = (totalMarks / maxMarks) * 100;
    resultEl.innerHTML = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
}