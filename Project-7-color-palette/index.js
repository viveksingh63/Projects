const generateBtnEl = document.getElementById('generateBtn');
const singleColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    return hexColor;
};

const colorPaleteGenerator = () => {
    const colorPalete = []
    for (let i = 0; i < 4; i++) {
        colorPalete.push(singleColorGenerator());
    }
    return colorPalete;
};

const rendercolorPalete = () => {
    const colorsContainer = document.querySelector(".color-container");
    colorsContainer.innerHTML = "";

    const colorPalete = colorPaleteGenerator();

    colorPalete.forEach((color, i) => {
        const colorDiv = document.createElement('div');
        colorDiv.id = `color${i + 1}`
        colorDiv.style.backgroundColor = color;
        colorDiv.className = 'colorBox';


        const colorTag = document.createElement('p');
        colorTag.id = `color${i + 1}Tag`;
        colorTag.className = 'colorTag';
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag);

        colorsContainer.appendChild(colorDiv);

    });

    const copyToClickboard = (id) => {
        const el= document.getElementById(id);
        navigator.clipboard.writeText(el.innerText)
        .then(()=>{
            alert("copied to clipboard");
        })
        .catch((error)=>{
            alert("could not copy");
        });

    };

    const colorTags = document.querySelectorAll('.colorTag');
    colorTags.forEach((colorTag, i) => {
        colorTag.addEventListener("click", () =>
            copyToClickboard(`color${i + 1}Tag`));
    });




};


generateBtnEl.addEventListener('click', rendercolorPalete);