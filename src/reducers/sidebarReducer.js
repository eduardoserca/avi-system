import { types } from "./../types";

const initialState = {
    sidebarShow: 'responsive'
  }


export const sidebarReducer = (state = initialState, { type, ...rest }) => {
  
    switch (type) {
      case types.sidebarSet:
        return {...state, ...rest }
      default:
        return state
    }
  }