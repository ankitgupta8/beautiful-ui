const bb = document.querySelector('#ham-bar');
const nav = document.querySelector('#nav-sec')
bb.addEventListener('click', () => {
    console.log(bb.innerHTML === '<i class="fas fa-times"></i>');

    if (bb.innerHTML === "<i class=\"fas fa-times\" aria-hidden=\"true\"></i>") {
        bb.innerHTML = '<i class="fas fa-bars"></i>'
    } else {
        bb.innerHTML = '<i class="fas fa-times"></i>';
    }
    nav.classList.toggle('active');
});

const themeChanger = document.querySelector('#themeChanger');

themeChanger.addEventListener('click', () => {
    document.body.classList.toggle('greenTheme');


    themeChanger.classList.toggle('rotater');
});