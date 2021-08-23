const BOXEL = document.querySelector(".BOXcontainer");
const FORMEL = document.querySelector(".FORMcontainer");
const ModalEL = document.querySelector("#ModalScreen");
const ModalContEL = document.querySelector('#ModalContainer'); 
const bodyEL = document.querySelector('body');

const APIkey = 'ea74a294-34de-4f3a-9403-4af2f0328854'

var INPUTtoggler = 2;
var MODALtoggler = 2;
var HOVERtoggler = 1;

var AccountName = []

inputToggle = () => {    
    if(INPUTtoggler === 1) {
        FORMEL.style.left = "150%";
        INPUTtoggler = 0;        
    } else {
        FORMEL.style.left = "50%";
        INPUTtoggler = 1;
    }
}

modalToggle = () => {
    if(MODALtoggler == 1) {
        ModalEL.style.left = "150%"
        ModalContEL.style.left = "150%"
        MODALtoggler = 0
    } else {
        ModalEL.style.left = "50%"
        ModalContEL.style.left = "50%"
        MODALtoggler = 1
    }
}

hoverToggle = () => {
    if(HOVERtoggler == 1) {
        BOXEL.classList.remove("no-hover");
        HOVERtoggler = 0
    } else {
        BOXEL.classList.add("no-hover");
        HOVERtoggler = 1
    }
}

LogEL = document.querySelector(".BOXcontainer");

var TotalPrice = 0
var TotalCount = 0

CardCountEL = document.querySelector("#CardCount")
CardPriceEL = document.querySelector("#CardPrice")

CreatePokemonLog = (w1, w2, w3) => {
    db.collection(AccountName).orderBy('PokeNumber').get().then((snapshot) => {
        snapshot.docs.forEach((doc,i) => {
            TotalPrice += doc.data().Price  
            TotalCount ++ 

            setTimeout(() => {
                
                LogEL.innerHTML += 
                    '<div class="BOX ' + doc.data().CardType + 'TypeCardBox" id="' + doc.id + '" data-id="'+ doc.id + '">' +
                    '<div class="CardImageBox"><img class="PokemonCards" src="' + doc.data().CardIMG + '" alt="pokemoncard" onclick="CardView(this);"></div>'+
                    '<div class="CardTopTable"><table><tr><td>' + doc.data().CardSet + '</td><td>' + doc.data().CardNumber + '</td><td>' + doc.data().Rarity + '</td></tr></table></div>' +
                    '<div class="Price">$ ' + doc.data().Price.toFixed(2) + '</div><div class="DELETER" onclick="Deleter(this);">DELETE</div></div>'                 
    
            }, i * 100);
        })
            
        CardCountEL.innerHTML = TotalCount
        CardPriceEL.innerHTML = "$ " + TotalPrice.toFixed(2)

            })
        }

SearchPokemonLog = (w1, w2, w3, o1) => {
    console.log("Search Language:  " + w1 + " is " + w2 + " " + w3 + " and is sorted by " + o1 )
    console.log("CardType")
    db.collection(AccountName).where(w1,w2,w3).get().then((snapshot) => {
        snapshot.docs.forEach((doc,i) => {
            TotalPrice += doc.data().Price  
            TotalCount ++ 
    
            setTimeout(() => {
                
                LogEL.innerHTML += 
                '<div class="BOX ' + doc.data().CardType + 'TypeCardBox" id="' + doc.id + '" data-id="'+ doc.id + '">' +
                '<div class="CardImageBox"><img class="PokemonCards" src="' + doc.data().CardIMG + '" alt="pokemoncard" onclick="CardView(this);"></div>'+
                '<div class="CardTopTable"><table><tr><td>' + doc.data().CardSet + '</td><td>' + doc.data().CardNumber + '</td><td>' + doc.data().Rarity + '</td></tr></table></div>' +
                '<div class="Price">$ ' + doc.data().Price.toFixed(2) + '</div><div class="DELETER" onclick="Deleter(this);">DELETE</div></div>'                 
   
            }, i * 100);
        })
            TOTEL = document.querySelector(".TotalSection");
            
            CardCountEL.innerHTML = TotalCount
            CardPriceEL.innerHTML = "$ " + TotalPrice.toFixed(2)
            })

        }
        
const newPokeform = document.querySelector('#addPokemonForm');

newPokeform.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection(AccountName).add({
        Name: newPokeform.Name.value,
        PokeNumber: parseInt(newPokeform.PokeNumber.value),
        CardIMG: newPokeform.CardIMG.value,
        CardNumber: newPokeform.CardNumber.value,
        CardSet: newPokeform.CardSet.value,
        CardType: newPokeform.CardType.value,
        Price: parseFloat(newPokeform.Price.value),
        Rarity: newPokeform.Rarity.value
    })
    newPokeform.reset();
    LogReset();
    CreatePokemonLog();
    inputToggle();
})

LogReset = () => {
    LogEL.innerHTML = "";
    TotalPrice = 0
    TotalCount = 0
}

Deleter = (element) => {
    var EID = element.parentElement.getAttribute('id');
    db.collection('PCI').doc(EID).delete();
    document.getElementById(EID).style.display = 'none';
}

CardView = (element) => {
    bigView = element.src.replace("400x558","800x1116");
    ModalEL.src = bigView;
    BOXEL.disable = true;    
    modalToggle();
}

// CreatePokemonLog();

        
DefaultView = () => {
    w1 = "PokeNumber" 
    w2 = ">"
    w3 = 152
    o1 = "PokeNumber"
    CreatePokemonLog(w1, w2, w3, o1);
}

CardTypeSelectorEL = document.querySelector('#CardTypeSelector');

CardTypeListener = () => {
    LogReset();
    if (CardTypeSelectorEL.value == "None") {
        console.log('Nothing to do')
        CreatePokemonLog();
    } else {
        SearchByCardType();
    }    
}

SearchByCardType = () => { 
    
    console.log(CardTypeSelectorEL.value)

    w1 = "CardType" 
    w2 = "=="
    w3 = CardTypeSelectorEL.value ;
    o1 = "CardType"
    SearchPokemonLog(w1, w2, w3, o1);
    
}

// TestFunc = () => {
// var newCityRef = db.collection("PCI3").doc();

// newCityRef.set(data);

// }

// TestFunc();

const LogInform = document.querySelector('#LogInForm');
const LogInContainer = document.querySelector('#LogInContainer');

var LogInAttemptUSER = [];
var LogInAttemptPW = [];
var Authenticator = [];

AuthenticateUSER = () => {
    db.collection("Accounts").where("UserName", '==' , LogInAttemptUSER).where("Password", '==' , LogInAttemptPW).get().then((snapshot) => {
        snapshot.docs.forEach((doc,i) => {   
            Authenticator++;
            AccountName = doc.data().CollectionName;            
        })
    })
    setTimeout(() => {        
        if (Authenticator == 1) {
            console.log('It worked')
            LogInContainer.style.display = "none";
            DefaultView();
        } else {
            console.log('It didnt work')
            LogInform.reset();
        }
    }, 600);
    
} 


LogInform.addEventListener('submit', (e) => {
    e.preventDefault();

    LogInAttemptUSER = LogInform.UserName.value;
    LogInAttemptPW = LogInform.Password.value;
    
    AuthenticateUSER();
    })



// DefaultView ();