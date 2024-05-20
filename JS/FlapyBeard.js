document.addEventListener('FlappyBird.html') , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.FlappyBird')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2

    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(startGame, 20)

    function jump() {
        birdBottom += 50
        bird.sty.bottom = birdBottom + 'px' 
    }
    document.addEventListener('keyup', jump)
}