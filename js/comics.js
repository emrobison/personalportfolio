// imported content (ES6 import)
//comicCharacters is an array of custom objects
import { comicCharacters } from '/assets/comic-characters.js'

// proper use of const variables -const because they aren't going to change.
const mainArea = document.querySelector('.cards-all')
const addCardButton = document.getElementById('add-card-button')
const formView = document.querySelector('.form-view')

//ES6 arrow function, as well as dot notation to access the method.  (method belongs to an object)
addCardButton.addEventListener('click', () => {
  const cards = mainArea.childNodes
  cards.forEach(function(card) {
    card.hidden = true
  })
  mainArea.hidden = true
  formView.hidden = false
})

function showAllCards() {
  //Example of an Array: childNodes is an array of the existing html cards.
  const cards = mainArea.childNodes
  //Array looping: for each is an an array method for looping through an array.
  //Manipulating Data: this is also manipulating the data here,changing the property of hidden for each card object inside of cards.
  cards.forEach(function(card) {
    card.hidden = false
  })
  mainArea.hidden = false
  formView.hidden = true
}

const formButton = document.getElementById('form-button')
formButton.addEventListener('click', () => {
  //Proper Declaration of an object: within the curly brackets is an object (this is a proper declaration of an object.)
  const newCharacter = {
    //key-value-pairs: name is key, and the result of that is the value.
    //method accessing dot notation
    name: document.getElementById('name-field').value,
    image: {
      small_url: document.getElementById('url-field').value
    },
    deck: document.getElementById('description-field').value
  }
  showAllCards()
  displayCharacter(newCharacter)
})
//proper use of variables with proper scope. (recreated everytime the function is called)
//also an arrow function
const displayCharacter = character => {
  const name = document.createElement('h4')
  const description = document.createElement('p')
  const pic = document.createElement('img')
  const characterDiv = document.createElement('div')
  const characterOverview = document.createElement('div')
  const characterDetails = document.createElement('div')


  characterDiv.classList.add('card')
  characterOverview.classList.add('face_card')
  characterOverview.classList.add('face_card--front')

  characterDetails.classList.add('face_card')
  characterDetails.classList.add('face_card--back')

  characterDiv.appendChild(characterDetails)

  characterDiv.appendChild(characterOverview)
  characterOverview.appendChild(name)
  characterOverview.appendChild(pic)
  characterDetails.appendChild(description)

  name.innerText = character.name
  description.innerText = character.deck
  pic.src = character.image.small_url

  characterDiv.addEventListener('click', function () {
    characterDiv.classList.toggle('is-flipped')
  })

  mainArea.appendChild(characterDiv)
}


function populateDOM(charArray) {
  charArray.forEach((char) => displayCharacter(char))
}

populateDOM(comicCharacters)
