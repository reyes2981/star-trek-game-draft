//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs
// I need to start organizing game in this file 
// when user logs in/signs up succusfully a START sreen will appear

function gameContainer() {
    renderCanvas();
    const player = new Player(200, y, 17, 'blue', 0.6, 0, -15);
    player.draw();
    console.log(player);
    spawnEnemies();
    // animate();
    playerMovement();
}

function renderCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
}

/* function stopTimer() {
    clearInterval(interval);
    interval = 0;
} */


// I need to refactor code into classes
// function will run when GAME begins 
/* function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 60) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = seconds;
    }
} */

//interval = setInterval(startTimer, seconds);

