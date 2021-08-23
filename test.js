PokemonCardInfo = {
    Pokemon: {
        Charizard: {
            CardNumber: 4, 
            CardSet: "Base Set",
            Rarity: "Holo Rare",
            CardType: "Fire", 
            HP: 120, 
            Stage: "Stage 2",
            Attack1: {
                Energy: "RRRR",
                Attack: "Fire Spin (100)",
                Description: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
                },
            Weakness: "W",
            Resistance: "F-30",
            Retreat: 3,
            CardIMG: "./assets/imgs/Charizard.jpg",
        },
        Blastoise: {
            CardNumber: 2, 
            CardSet: "Base Set",
            Rarity: "Holo Rare",
            CardType: "Water", 
            HP: 100, 
            Stage: "Stage 2",
            Attack1: {
                Energy: "WWW",
                Attack: "Hydro Pump (40+)",
                Description: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
                },
            Weakness: "L",
            Resistance: "None",
            Retreat: 3,
            CardIMG: "./assets/imgs/Blastoise.jpg",
        },
        }
        
    
};


Name = "Charizard", 
[
    CardNumber = "4", 
    CardSet = "Base Set",
    Rarity = "Holo Rare",
    CardType = "Fire", 
    HP = 120, 
    Stage = "Stage 2",
    Attack1 = [
        Energy = "RRRR",
        Attack = "Fire Spin (100)",
        Description = "Discard 2 Energy cards attached to Charizard in order to use this attack.",
        ],
    Weakness = "W",
    Resistance = "F-30",
    Retreat = 3,
    CardIMG = "./assets/imgs/Charizard.jpg",
],
Name = "Blastoise", 
[
    CardNumber = "2", 
    CardSet = "Base Set",
    Rarity = "Holo Rare",
    CardType = "Water", 
    HP = 100, 
    Stage = "Stage 2",
    Attack1 = [
        Energy = "WWW",
        Attack = "Hydro Pump (40+)",
        Description = "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
        ],
    Weakness = "L",
    Resistance = "None",
    Retreat = 3,
    CardIMG = "./assets/imgs/Blastoise.jpg",
]

for (let i = 0; i < PCI.length; i++) {
        
    if (PCI[i].CardType == "Fire") {
     LogEL.innerHTML += 

     '<div class="CardBox FireTypeCardBox">' +
     '<div class="ImgSpace">' +
         '<img class="PokemonCards" src="' + PCI[i].CardIMG + '" alt="pokemoncard">' +
     '</div>' +
         '<div class="TextSpace">' +
             '<h1>' + PCI[i].Name + '</h1>' +
             '<h2>Set: ' + PCI[i].CardSet + '</h2>' +
             '<h2>Set #: ' + PCI[i].CardNumber + '</h2>' +
             '<h2>Rarity: ' + PCI[i].Rarity + '</h2>' +
             '<h2>Type: ' + PCI[i].CardType + '</h2>' +
             '<h2>HP: ' + PCI[i].HP + '</h2>' +
             '<h2>Stage: ' + PCI[i].Stage + '</h2>' +
             '<h2>Weakness: ' + PCI[i].Weakness + '</h2>' +
             '<h2>Resistance: ' + PCI[i].Resistance + '</h2>' +
             '<h2>Retreat: ' + PCI[i].Retreat + '</h2>' +
         '</div>' +
         '<div class="PriceSpace">' +
         '<h1 class="Price">$' + PCI[i].Price + '</h1>' +
         '<h2>Ability:</h2>'+
             '<dl>'+
                 '<dt>' + PCI[i].Ability + '</dt>' +
                 '<dd>'+ PCI[i].AbilityDescription +'</dd>'   +
             '</dl>' +
         '<h2>Attack 1:</h2>' +
         '<dl>' +
             '<dt>Energy:</dt>' +
             '<dd>' + PCI[i].Attack1.Energy + '</dd> ' +                   
             '<dt>Attack:</dt>' +
             '<dd>' + PCI[i].Attack1.Attack + '</dd> ' + 
             '<dt>Description:</dt>' +             
             '<dd>' + PCI[i].Attack1.Description + '</dd> ' +
         '</dl>' +
         '</div>' +       
     '</div>'    
    } else if (PCI[i].CardType == "Water") {      

     LogEL.innerHTML += 

     '<div class="CardBox WaterTypeCardBox">' +
     '<div class="ImgSpace">' +
         '<img class="PokemonCards" src="' + PCI[i].CardIMG + '" alt="pokemoncard">' +
     '</div>' +
         '<div class="TextSpace">' +
             '<h1>' + PCI[i].Name + '</h1>' +
             '<h2>Set: ' + PCI[i].CardSet + '</h2>' +
             '<h2>Set #: ' + PCI[i].CardNumber + '</h2>' +
             '<h2>Rarity: ' + PCI[i].Rarity + '</h2>' +
             '<h2>Type: ' + PCI[i].CardType + '</h2>' +
             '<h2>HP: ' + PCI[i].HP + '</h2>' +
             '<h2>Stage: ' + PCI[i].Stage + '</h2>' +
             '<h2>Weakness: ' + PCI[i].Weakness + '</h2>' +
             '<h2>Resistance: ' + PCI[i].Resistance + '</h2>' +
             '<h2>Retreat: ' + PCI[i].Retreat + '</h2>' +
         '</div>' +
         '<div class="PriceSpace">' +
         '<h1 class="Price">$' + PCI[i].Price + '</h1>' +
         '<h2>Ability:</h2>'+
             '<dl>'+
                 '<dt>' + PCI[i].Ability + '</dt>' +
                 '<dd>'+ PCI[i].AbilityDescription +'</dd>'   +
             '</dl>' +
         '<h2>Attack 1:</h2>' +
         '<dl>' +
             '<dt>Energy:</dt>' +
             '<dd>' + PCI[i].Attack1.Energy + '</dd> ' +                   
             '<dt>Attack:</dt>' +
             '<dd>' + PCI[i].Attack1.Attack + '</dd> ' + 
             '<dt>Description:</dt>' +             
             '<dd>' + PCI[i].Attack1.Description + '</dd> ' +
         '</dl>' +
         '</div>' +       
     '</div>'    
 }
}
