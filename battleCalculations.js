import {ChooseMove, ChosenMove} from "./chooseMove.js";
import menuSelection from "./menuSelection.js";
import { Player, Rival, CurrentPokemon, RivalPokemon, tailwhipCounter } from "./monsters.js";

function getPokemonMove() {

//clear any text 
$('#ui-text').text('')

//instantiate a text prompt variable,
let TextPrompt;
TextPrompt = `${CurrentPokemon.name.toUpperCase()} used ${ChosenMove.toUpperCase()}!`;
// then assign it to an interval text generation
let i = 0;
let intervalId = setInterval(function() {

    if (i < TextPrompt.length) {
    $('#ui-text').append(TextPrompt.charAt(i));
    i++;} 
    else {
    clearInterval(intervalId);
    }
}, 50);
//once complete, calculate the damage to opponent
setTimeout(function() {
    //calculate the damage done
    if (ChosenMove == 'SCRATCH') {
        RivalPokemon.health = RivalPokemon.health - 4
        console.log('the move was Scratch! #2')
    }
    if (ChosenMove == 'EMBER') {
        RivalPokemon.health = RivalPokemon.health - 3
        console.log(RivalPokemon.health, ' rival health is left!')
        $('#ui-text').text('')
        TextPrompt = "It's not very effective..."
        let i = 0; 
        let intervalId = setInterval(function() {
            if( i < TextPrompt.length) {
            $('#ui-text').append(TextPrompt.charAt(i))
            i++
            }
            else
            {
            clearInterval(intervalId)
            RivalMove()
            }
        }, 50)
        
    }
}, 3000)

}
//second function call that's called after our damage calculations
function RivalMove() {
    //generate a random time for a move select
    let timeInMilliseconds = new Date().getTime();
    let binaryTime = (timeInMilliseconds >>> 0).toString(2);
    let lastDigit = binaryTime[binaryTime.length - 1];
    let randomNumber = Math.floor(parseInt(lastDigit, 2));
    console.log(randomNumber);

    //let the random number equal the rival move selected
    let selectedRivalMove = null
     selectedRivalMove = RivalPokemon.moves[randomNumber]
    console.log('selected rival move is ', selectedRivalMove)
    //select rival move display
    if (selectedRivalMove == 'TACKLE') {
        let tailwhipCalc = tailwhipCounter + 4
        CurrentPokemon.health = CurrentPokemon.health - (tailwhipCalc)
        console.log(CurrentPokemon.health + ' current pokemon health left!')
        let TextPrompt = `${RivalPokemon.name} used TACKLE!`
        let i = 0; 
        setTimeout(() => {
            $('#ui-text').text('')
            let intervalId = setInterval(function() {
                if( i < TextPrompt.length) {
                $('#ui-text').append(TextPrompt.charAt(i))
                i++
                }
                else
                {
                clearInterval(intervalId)
                setTimeout(() => {
                    $('#ui-text').text('')
                    menuSelection();
                }, 3000)
                }
            }, 50)
        }, 4000);
    }
    if (selectedRivalMove == 'TAIL WHIP') {
        let tailwhipCounter =+ 1
        console.log('tail whip counter at: '  + tailwhipCounter)
        let TextPrompt = `${RivalPokemon.name} used TAIL WHIP!`
        let i = 0; 
        setTimeout(() => {
            $('#ui-text').text('')
            let intervalId = setInterval(function() {
                if( i < TextPrompt.length) {
                $('#ui-text').append(TextPrompt.charAt(i))
                i++
                }
                else
                {
                clearInterval(intervalId)
                setTimeout(() => {
                    $('#ui-text').text('')
                    menuSelection();
                }, 3000)
                }
            }, 50)
        }, 4000);
    }

}


export default getPokemonMove 