const container = document.querySelector('.container')
const timer = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')


function getTimeSeconds(sec) {
    const date = new Date(sec * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
};
let seconds = 0
let addsec;
function addOneSec() {
    addsec = setInterval(function () {
        timer.innerHTML = getTimeSeconds(seconds++)
    }, 1000)
}

iniciar.addEventListener('click', function (e) {
    timer.classList.add('acionado')
    timer.classList.remove('pausado')
    clearInterval(addsec)
    addOneSec()
})
pausar.addEventListener('click', function (e) {
    clearInterval(addsec)
    timer.classList.remove('acionado')
    timer.classList.add('pausado')
})
zerar.addEventListener('click', function (e) {
    clearInterval(addsec)
    timer.innerHTML = '00:00:00'
    seconds = 0
    timer.classList.remove('acionado')
    timer.classList.remove('pausado')
    
})