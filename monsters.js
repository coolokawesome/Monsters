 let Player = {
  pokemon: {
    p1: {
      name: "Charmander",
      type: "Fire",
      moves: ["SCRATCH", "EMBER",  "--", "--"],
      level: 5,
      health: 20,
      xp: 0  
    },
    p2: {
      name: "Pidgey",
      type: "Normal",
      moves: ["Gust", "Sand-Attack", "--", "--"],
      level: 5,
      health: 20,
      xp: 0  
    },
  }
 }
let Rival = {
  pokemon: {
    p1: {
      name: "Squirtle",
    type: "Water",
    moves: ["Tackle", "Tail Whip"],
    level: 5,
    health: 20,
    xp: 0,
    }
  }
}

let CurrentPokemon = Player.pokemon.p1
let RivalPokemon = Rival.pokemon.p1

  export {
    Player, Rival, CurrentPokemon, RivalPokemon
  }
  