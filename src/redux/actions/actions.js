import { GET_ARTICLE, SET_LOADING_STATUS, SET_USER, GET_COMENTS } from "../types"


export const setUser = (payload) => {
   return {
      type:SET_USER,
      user:payload
   }
}

export const setLoading = (status) => {
   return {
      type:SET_LOADING_STATUS,
      status:status
   }
}

export const getArticles = (payload) => {
   return {
      type:GET_ARTICLE,
      payload:payload
   }
}
export const getComments = (payload) => {
   return {
      type:GET_COMENTS,
      payload:payload
   }
}
