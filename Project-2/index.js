let open = false;
let date;

const settingicon = document.getElementById('icon');
const settingcontent = document.getElementById('settingContent');
const initialtextEl = document.getElementById('initialText');
const aftereffecrEl = document.getElementById('afterEffect');
const dobbuttonEl = document.getElementById('dobButton');
const dobinputEl = document.getElementById('dobInput');

const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

const maketwonumber=(number)=>{
    return number>9 ? number:`0${number}`
};

const toggledob = () => {
    if (open) {
        settingcontent.classList.add('hide');
    } else {
        settingcontent.classList.remove('hide');
    } open = !open;
    console.log('toggle', open);
}


const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateofbirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365) % 12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24) % 30);
    const hour = Math.floor(dateDiff / (1000 * 60 * 60) % 24);
    const minute = Math.floor(dateDiff / (1000 * 60) % 60);
    const second = Math.floor(dateDiff / (1000) % 60);


    yearEl.innerHTML = maketwonumber(year);
    monthEl.innerHTML = maketwonumber(month);
    dayEl.innerHTML = maketwonumber(day);
    hourEl.innerHTML = maketwonumber(hour);
    minEl.innerHTML = maketwonumber(minute);
    secEl.innerHTML = maketwonumber(second);
}



const setDOB = () => {
    const dateString = dobinputEl.value;
    dateofbirth =dateString ? new Date(dateString):null;
    if (dateofbirth) {


        initialtextEl.classList.add('hide');
        aftereffecrEl.classList.remove('hide');
        setInterval(() => {
            updateAge();
        }, 1000);
    } else {
        aftereffecrEl.classList.add('hide');
        initialtextEl.classList.remove('hide');

    }
}
setDOB();






settingicon.addEventListener('click', toggledob);
dobbuttonEl.addEventListener('click', setDOB);