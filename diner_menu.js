const entree = {
  'papas fritas': 5,
  'nachos': 8,
  'empanada': 4
}

const entreeComments = {
  'papas fritas': 'Papas en rodajas fritas en aceite caliente hasta que queden doradas',
  'nachos': 'Trozos de tortilla de maíz fritos acompañado de queso especial',
  'empanada': 'Masa de pan rellena de carne'
}

const sideChoice = {
'fetuccini alfredo': 20,
'rib eye': 35
}

const sideChoiceComments = {
'fetuccini alfredo': 'Pasta fetuccini con salsa Aldredo que es queso parmesano, mantequilla y crema de leche.',
'rib eye': 'Este corte de carne no tiene hueso y posee una gran cantidad de marmoleo que lo hace especialmente tierno y de gran sabor.'
}

const restaurantMenu = menu => {
let menuString = []
Object.keys(menu).map(item => {
menuString.push(` ${item}`)
})
return menuString.join('\n')
}

alert('¡Bienvenido! El menu más exquisito')

alert(`Le compartimos las entradas:\n${restaurantMenu(entree)}`)

const entreeSelection = prompt('¿Qué entrada desea?') //- a user selects an entree.
alert(`${entreeSelection}: ${entreeComments[entreeSelection]}`); //- “Waitress” makes a comment based on their selection
alert(`El costo de ${entreeSelection}:  $${entree[entreeSelection]}`) // - tell them the price

alert(`Le compartimos los platos fuertes:\n${restaurantMenu(sideChoice)}`)

const sideChoiceSelection = prompt('Que plato fuerte desea?')
alert(`Una pequeña descripción de ${sideChoiceSelection}: ${sideChoiceComments[sideChoiceSelection]}.`);
alert(`El costo de ${sideChoiceSelection}: $${sideChoice[sideChoiceSelection]}`)

const totalAccount = entree[entreeSelection] + sideChoice[sideChoiceSelection]
alert(`El total a pagar es: $${totalAccount} `)