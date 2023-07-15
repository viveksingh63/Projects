const menuBarEl = document.getElementById('menuBar');
const menuMobileEl = document.querySelector('.menu-mobile');

const onClose = () => {
    menuMobileEl.classList.toggle('show-menu');

};

menuBarEl.addEventListener("click", () => {
    console.log('menuBar Clicked');

    onClose();
});

