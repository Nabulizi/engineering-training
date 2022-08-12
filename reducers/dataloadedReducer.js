const INITIAL_STATE = {
    dataLoaded: false,
    loading: false,
    data:{},
};
  
function dataLoadedReducer(state = INITIAL_STATE, action) {
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
      default:
        return state
  }
}

export default dataLoadedReducer;