const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvens = document.querySelector('.nuvens')


const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {

        mario.classList.remove('pulo')

    }, 600);
}

const verificarPulo = (pipePosition, marioPosition)=>{
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
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    verificarPulo(pipePosition, marioPosition)

}, 10)

var tempoPontos = 100;

const aumentarPontos = setInterval(()=>{
    let pontos = document.getElementById('pontos');
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    
    if(pipePosition > 96 || pipePosition <= 0 || marioPosition >= 50){
        pontos.innerHTML = parseInt(pontos.innerHTML) + 1;
    }

    if (pontos % 100 == 0){
        tempoPontos = tempoPontos + 10;
        pipe.style.animation = 'pipe 2s linear infinite';
    }else if(pontos % 500 == 0){
        tempoPontos = tempoPontos + 40;
        pipe.style.animation = 'pipe 1.5s linear infinite';
    }else if(pontos % 1000 == 0){
        tempoPontos = tempoPontos + 50;
        pipe.style.animation = 'pipe 1s linear infinite';
    }

    verificarPulo(pipePosition, marioPosition)

}, tempoPontos)


document.addEventListener('keydown', pulo)
