import { Player, Rival, CurrentPokemon } from "./monsters.js";
import  menuSelection  from "./menuSelection.js"

$(document).ready(() => {
    console.log(CurrentPokemon.name)
    menuSelection();
})
