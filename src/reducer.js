const initialState = {
  hosts: [],
  selectedHost: "",
  areas: [],
  errors: []
}

const reducer = (state = initialState, action) => {

  if (action.type === "SET_HOSTS"){
    return{
      ...state,
      hosts: action.payload.hosts
    }
  }else if(action.type === "SELECTED_HOST"){
    return{
      ...state,
      selectedHost: action.payload.host
    }
  }else if(action.type === "CHANGE_STATUS"){
    return{
      ...state,
      ////find the host with the id equal to the selected one and change the reverse the active status of that host
      hosts: state.hosts.map(host => host.id === state.selectedHost.id? {...host, active: !host.active}: host),
      selectedHost: {
        ...state.selectedHost,
        active: !state.selectedHost.active
      }
    }
  }else if(action.type === "SET_AREAS"){
    return{
      ...state,
      areas: action.payload.areas

    }
  }else if(action.type === "SET_AREA"){
    return{
      ...state,
      ///find the host equal to the selected host and change his area prop with the action.payload 
      ///check the limit of area 
      hosts: state.hosts.map(host => host.id === state.selectedHost.id?{ ...host, area: action.payload.area}: host),
      selectedHost: {
        ...state.selectedHost,
        area: action.payload.area
      }

 
    }
  }else if(action.type === "ACTIVE_ALL"){

    return{
      ...state,
      /// loop among all the hosts and change the value of active 
      hosts: state.hosts.map((host) => ({ ...host, active: !host.active }))
    }
  }else if(action.type === "LOG_MESSAGE"){
    return {
      ...state,
      errors: [...state.errors, action.payload.message]
    }
  }

  return state
}

export default reducer;