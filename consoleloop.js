let phaseCount = 0
let playerTurn = true

function drawPhase() {
    $('#handlePhase').text('Draw Phase')
    console.log(phaseCount)
}
function firstPhase() {
    $('#handlePhase').text('First Phase')
    console.log(phaseCount)
}
function mainPhase() {
    $('#handlePhase').text('Main Phase')
    console.log(phaseCount)
}
function battlePhase() {
    $('#handlePhase').text('Battle Phase')
    console.log(phaseCount)
}
function endPhase() {
    $('#handlePhase').text('End Phase')
    console.log(phaseCount)
}

function handlePhases() {
    if(phaseCount == 0) {
        drawPhase()
        phaseCount++
        return
    }
    if(phaseCount == 1) {
        firstPhase()
        phaseCount++
        return
    }
    if(phaseCount == 2) {
        mainPhase()
        phaseCount++
        return
    }
    if(phaseCount == 3) {
        battlePhase()
        phaseCount++
        return
    }
    if(phaseCount == 4) {
        endPhase()
        phaseCount = 0
        return
    }
}

$(document.body).append(
    $('<button>').text('start').attr('id', 'handlePhase').click(handlePhases)
)
