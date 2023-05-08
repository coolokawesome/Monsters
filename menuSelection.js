import {ChooseMove} from './chooseMove.js'

function menuSelection() {
  $('#item-selection').show()
    //remove any previous event listeners
    $('#fight').off();
    $('#pkmn').off();
    $('#item').off();
    $('#run').off();
    //add new event listners
    $('#fight').on("click", e => {
        // Once fight is clicked, hide the menu after a 0.5 second delay
        setTimeout(() => {
          $('#item-selection').hide();
        }, 200);
      
        // Once hidden, map all the available moves from the player's pokemon after a 0.5 second delay
        setTimeout(() => {
          ChooseMove();
        }, 500);
      });
}
export default menuSelection;
