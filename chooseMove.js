import { Player, Rival, CurrentPokemon } from './monsters.js'
import battleCalculations from './battleCalculations.js'

let ChosenMove = '';

function ChooseMove() {
    //remove all click events 
    $('#ui-moves button[id^="move-button"]').off('click');
    
   //for each move, map them all out in buttons, give them styles, and ID's
   CurrentPokemon.moves.forEach((move, key) => {
    $('#ui-moves').append(
        $('<button>')
        .text(move)
        .attr('id', `move-button-${key}`)
        .attr('class', 'move-button')
        .val(`move-${key}`)
       )})
       
   // Bind click event to all move buttons
   $('#ui-moves button[id^="move-button"]').on('click', function() {
    console.log(`Button clicked: ${$(this).text()}`);
    // Assign the move to a global variable
    ChosenMove = $(this).text()
    console.log(ChosenMove)
    //offload event listeners
    $('#ui-moves button[id^="move-button"]').off('click');
    //remove buttons
    $('#ui-moves button[id^="move-button"]').remove();

    setTimeout(() => {
        battleCalculations();
      }, 500);
 });
}

export  {ChooseMove, ChosenMove};