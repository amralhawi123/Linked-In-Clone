import { SET_LOADING_STATUS, GET_COMENTS } from "../types";


export const initialstate = {
   loading:false,
   comments:[],
}

const comentReducer = (state=initialstate, action) =>{
   switch (action.type) {
      case SET_LOADING_STATUS:
         return{
            ...state,
            loading:action.status
         }
      case GET_COMENTS:
         return{
            ...state,
            comments:action.payload
         }
      default:
         return state
   }
}

export default comentReducer