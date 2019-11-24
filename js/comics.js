import { comicCharacters } from '/assets/comic-characters.js'

// async function getComicData(url) {
//   try {
//     const response = await fetch(url, { mode: 'no-cors' })
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// }

// let characters = []

// const theData = getComicData('https://comicvine.gamespot.com/api/characters/?api_key=ab698d57770cddfc23a431c747fa8d7c04de0dd7&format=json&limit=25')
//   .then((data) => {
//     console.log(data.results)
//     for (const character of data.results) {
//       getComicData(character.api_detail_url)
//         .then((characterData) => {
//           characters.push(characterData.results)
//           console.log(characterData.results)
//         })
//     }
//   })

// let mainArea = document.querySelector('main')
const mainArea = document.querySelector('.cards-all')
const addCardButton = document.getElementById('add-card-button')
const formView = document.querySelector('.form-view')

addCardButton.addEventListener('click', () => {
  const cards = mainArea.childNodes
  cards.forEach(function(card) {
    card.hidden = true
  })
  mainArea.hidden = true
  formView.hidden = false
})

function showAllCards() {
  const cards = mainArea.childNodes
  cards.forEach(function(card) {
    card.hidden = false
  })
  mainArea.hidden = false
  formView.hidden = true
}

const formButton = document.getElementById('form-button')
formButton.addEventListener('click', () => {
  const newCharacter = {
    name: document.getElementById('name-field').value,
    image: {
      small_url: document.getElementById('url-field').value
    },
    deck: document.getElementById('description-field').value
  }
  showAllCards()
  displayCharacter(newCharacter)
})

const displayCharacter = character => {
  let name = document.createElement('h4')
  let description = document.createElement('p')
  let pic = document.createElement('img')
  let characterDiv = document.createElement('div')
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

  // <div class="face_card face_card--front"></div>
  // <div class="face_card face_card--back"></div>
  mainArea.appendChild(characterDiv)
}

// const cardsContainer = document.querySelector('.cards-all')
function populateDOM(charArray) {
  charArray.forEach((char) => displayCharacter(char))
}

// function getCharNumber(charURL) {
//   let end = charURL.lastIndexOf('/')
//   let charID = charURL.substring(end - 2, end)
//   if (charID.indexOf('/') !== -1) {
//     return charID.slice(1, 2)
//   } else {
//     return charID
//   }
// }

populateDOM(comicCharacters)
