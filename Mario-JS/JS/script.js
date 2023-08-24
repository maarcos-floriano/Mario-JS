const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvens = document.querySelector('.nuvens')


const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {

        mario.classList.remove('pulo')

    }, 800);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 96 && pipePosition > 0 && marioPosition < 50 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.marginLeft = '40px';
        mario.style.width = '60px';

        nuvens.style.animation = 'none'

    }

}, 10)

document.addEventListener('keydown', pulo)
