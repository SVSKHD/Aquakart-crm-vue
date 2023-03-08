import { createStore } from 'vuex'

export default createStore({
  state: {
    username:"",
    email:"",
    userStatus:false,
    role:""
  },
  getters: {
    username:(state)=>state.username,
    email:(state)=>state.email,
    userStatus:(state)=>state.userStatus,
    role:(state)=>state.role
  },
  mutations: {
    setUserName(state,payload){
      state.username=payload
    },
    setUserEmail(state,payload){
      state.email=payload
    },
    setUserStatus(state,payload){
      state.userStatus=payload
    },
    setUserRole(state,payload){
      state.role=payload
    },
  },
  actions: {
    manipulateUserData(context , data){
      context.commit('setUserName' , data.user.displayName)
      context.commit('setUserEmail' , data.user.email )
      context.commit('setUserStatus' , true)
    },
    manipulateUserStatus(context){
      context.commit('setUserStatus' , true)
    }
  },
  modules: {
  }
})
