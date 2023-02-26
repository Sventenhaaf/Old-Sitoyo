// ACTIONS
const mainReducer = (state: InitialStateType, action: ACTION) => {
  switch (action.type) {
    // case "Add":
    //   return state;
    default:
      return { ...state, ...action.payload };
  }
};

export default mainReducer;
