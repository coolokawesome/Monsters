import {PlayerMonsters, RivalMonsters} from "./monsters.js";
//players pokemon variables
let pokemonSelected = PlayerMonsters[0];
let pokemonHealth = pokemonSelected.hp
let pokemonName = pokemonSelected.name
let pokemonLevel = pokemonSelected.lvl
let selectedMove = ''
//rivals pokemon variables
let rivalSelected = RivalMonsters[0];
let rivalHealth = rivalSelected.hp
let rivalName = rivalSelected.name
let rivalLevel = rivalSelected.lvl
let rivalMoves = rivalSelected.moves
let rivalMove = ''
// grab the interactives
let fight = $('#fightButton');
let bag = $('#bagButton');
let pkmn = $('#pkmnButton');
let run = $('#runButton');
let menuSelector = $('#menuSelector');
let mainDisplay = $('#mainDisplay');
let fightSelector = $('#fightSelector')
let moveTextbox = $('#moveTextBox')
//calculate a random move from the rival

function RivalFight() { 
    console.log('rivalFight')
    let value =  Math.floor(Math.random() * rivalMoves.length)
    rivalMove = ''
 if (value == 0) {
    console.log('Random returned a 0')
    moveTextbox.show()
    moveTextbox.text(rivalName + ' used ' + rivalMoves[0])
    pokemonHealth = pokemonHealth - 3
    console.error('OUR HEALTH: ' + pokemonHealth)
 }
 if (value == 1) {
    console.log('Random returned a 1')
    moveTextbox.show()
    moveTextbox.text(rivalName + ' used ' + rivalMoves[1])
    pokemonHealth = pokemonHealth - 5
    moveTextbox.text("it's super effective!")
    console.error('OUR HEALTH: ' + pokemonHealth)
 }
 setTimeout(Main, 3000)
 
}
function Fight() {
    console.log('fight')
    //hide all the moves
    for (let i = 0; i < 4; i++) {
        $('#move'+i).remove()
    }
    //initiate battle sequence
    if (selectedMove == 'CUT') {
        rivalHealth = rivalHealth - 4
        console.log('SQUIRTLE HEALTH: ' + rivalHealth)
    }
    if (selectedMove == 'EMBER') {
        rivalHealth = rivalHealth - 3
        console.log('SQUIRTLE HEALTH: ' + rivalHealth)
    }
    setTimeout(RivalFight, 3000)
}
function Main() {
    
    moveTextbox.text('')
    menuSelector.show()
    //if fight is selected...
    fight.on('click', function() {
        console.log('FIGHT SELECTED');
        //hide the menu
        menuSelector.hide();
        // display the pokemon's moves 
        for(let i = 0; i < pokemonSelected.moves.length; i++) {
            mainDisplay.append(
                $('<button>').text(pokemonSelected.moves[i])
                .addClass('move')
                .attr('id', 'move'+ i)
            )
        }
        //select all the moves
        let moves = document.querySelectorAll('button[id^="move"]');
        //trigger a state 
        let moveTriggered = false
        moves.forEach(move => {
            move.addEventListener('click', function handleClick(event) {
                // Remove event listener after it has been triggered
               
                for (let i = 0; i < 4; i++) {
                  $('#move'+ i).remove()
                }
                moveTextbox.show()
                moveTextbox.text(pokemonSelected.name + ' used ' + event.target.textContent + '!')
                moveTriggered = true
                selectedMove = ''
                selectedMove = event.target.textContent;
                if (moveTriggered == true) {
                  //initiate Fight Sequence
                  
                  Fight()}
            })
        })     
    });
}
// call the main loop;
Main()