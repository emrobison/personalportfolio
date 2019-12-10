import { planets } from '/assets/planets-data.js'


function displayPlanets(planets) {
  const mainArea = document.querySelector('main')
  // removes everything from main
  mainArea.innerHTML = null
  planets.forEach(function (planet) {
    const planetsDiv = document.createElement('div')
    let name = document.createElement('h1')
    let terrain = document.createElement('p')
    let pic = document.createElement('img')


    planetsDiv.appendChild(name)
    planetsDiv.appendChild(terrain)
    planetsDiv.appendChild(pic)

    let planNum = getPlanNumber(planet.url)

    name.innerText = planet.name
    terrain.innerText = planet.terrain
    pic.src = `https://starwars-visualguide.com/assets/img/planets/${planNum}.jpg`


    mainArea.appendChild(planetsDiv)

  })
}


function getPlanNumber(planURL) {
  //examples of let, lets can be changed const cant.
  let end = planURL.lastIndexOf('/')
  let planID = planURL.substring(end - 2, end)
  //another conditional and value comparison, comparing two values with a conditional(if-else).
  if (planID.indexOf('/') !== -1) {
    return planID.slice(1, 2)
  } else {
    return planID
  }
}

// show all planets on page load
displayPlanets(planets)

function displayPlanetsWithUnknowPopulation() {
  const planetsWithUnknowPopulation = planets.filter(function(planet) {
    //triple equals is a comparison
    return planet.population === "unknown"
  })
  return planetsWithUnknowPopulation
}

function displayPlanetsWithUnknowGravity() {
  const planetsWithUnknowGravity = planets.filter(function(planet) {
    return planet.gravity === "unknown"
  })
  return planetsWithUnknowGravity
}


const populationUnknownButton = document.getElementById('unknown_population');
populationUnknownButton.addEventListener('click', function() {
  const filteredPlanets = displayPlanetsWithUnknowPopulation()
  displayPlanets(filteredPlanets)
})

const gravityUnknownButton = document.getElementById('unknown_gravity');
gravityUnknownButton.addEventListener('click', function() {
  const filteredPlanets = displayPlanetsWithUnknowGravity()
  displayPlanets(filteredPlanets)
})
