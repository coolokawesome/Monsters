import {ChooseMove, ChosenMove} from "./chooseMove.js";
import { Player, Rival, CurrentPokemon, RivalPokemon } from "./monsters.js";

function getPokemonMove() {

//clear any text 
$('#ui-text').text('')

//instantiate a text prompt variable,
let TextPrompt;
let textflag = false;
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
        console.log(RivalPokemon.health, 'is left!')
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
            }
        }, 50)
        RivalMove()
    }
}, 4000)

}
//second function call that's called after our damage calculations
function RivalMove() {
    //generate a random time for a move select
    const timeInMilliseconds = new Date().getTime();
    const binaryTime = (timeInMilliseconds >>> 0).toString(2);
    const lastDigit = binaryTime[binaryTime.length - 1];
    const randomNumber = Math.floor(parseInt(lastDigit, 2) + 1);
    console.log(randomNumber);

}


export default getPokemonMove 