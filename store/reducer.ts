// ACTIONS
const mainReducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case "Add":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default mainReducer;
