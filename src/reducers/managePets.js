export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let newPets = state.pets.filter((pet) => pet.id !== action.id)
      return {...state, pets: newPets}
    default:
    return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container')
  let petItems = state.pets.map((pet) => `<li>${pet.name}</li>`).join('')
  container.innerHTML = `<ul>${petItems}</ul>`

}

// dispatch({type: '@@INIT'})
