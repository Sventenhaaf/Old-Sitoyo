import { FC, ReactNode, createContext, useReducer, Dispatch } from "react";
import reducer from "./reducer";

const initialState: InitialStateType = {
  pages: [],
};

const StoreContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
  addPage: (page: Page) => void;
}>({
  state: initialState,
  dispatch: () => null,
  addPage: () => {},
});

const Store: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
        addPage: (page: Page) =>
          dispatch({
            type: "ADD_PAGE",
            payload: {
              pages: [...state.pages, page],
            },
          }),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { Store, StoreContext };
