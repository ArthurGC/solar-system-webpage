const buttons = document.querySelectorAll('button');
const main = document.querySelector('main');
const div = main.querySelectorAll('div');
let i = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'next') {
            div[i].classList.remove('active');
            i = (i + 1) % div.length;
            div[i].classList.add('active');
        }
        else if (button.id === 'previous') {
            div[i].classList.remove('active');
            i = (i - 1 + div.length) % div.length;
            div[i].classList.add('active');
        }
    })
})