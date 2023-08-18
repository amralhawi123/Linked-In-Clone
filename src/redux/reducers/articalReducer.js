import { GET_ARTICLE, SET_LOADING_STATUS} from "../types";


export const initialstate = {
   loading:false,
   articles:[],
}

const articalReducer = (state=initialstate, action) =>{
   switch (action.type) {
      case SET_LOADING_STATUS:
         return{
            ...state,
            loading:action.status
         }
      case GET_ARTICLE:
         return{
            ...state,
            articles:action.payload
         }
      default:
         return state
   }
}

export default articalReducer