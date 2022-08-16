const INITIAL_STATE = {
    dataLoaded: false,
    loading: false,
    data:{},
    error: null 
};
  
function dataLoadedReducer(state = INITIAL_STATE, action) {
    console.log('action', action);
  switch (action.type) {
    case "TOGGLE_DATALOADED":
        return {
          ...state,
          dataLoaded: !state.dataLoaded,
        };
    case "DATA_LOADING":
        return {
            ...state,
            loading: action.loading,
        };
    case "DATA_SUCCESS":
        return {
            ...state,
            data: action.data,
        };
    case "DATA_FAILURE":
        return {
            ...state,
            error: action.error,
            loading: false,
        };
      default:
        return state
  }
}

export default dataLoadedReducer;