export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type)
  case 'ADD_PET':
    return {...state, pets: [...state.pets, action.pet]}
  case 'REMOVE_PET':
    let newPets = state.pets.filter((pet) => pet.id !== action.id)
    return {...state, pets: newPets}
  default:
  return state
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container')
  const petList = document.createElement('ul')
  container.appendChild(petList)

  for(let i = 0; i < state.pets.length; i ++){
    let listItem = document.createElement('li')
    listItem.innerHTML = state.pets[i].name
    petList.appenChild(listItem)
  }

}

// dispatch({type: '@@INIT'})
