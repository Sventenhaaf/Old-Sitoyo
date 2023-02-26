import { FC, ReactNode, createContext, useReducer, Dispatch } from "react";
import reducer from "./reducer";

const initialState: InitialStateType = {
  pages: [
    {
      id: 1,
      name: "Home",
      sections: [
        {
          id: 1,
          type: "title",
          title: "This is the title",
          subTitle: "Subtitle",
        },
      ],
    },
  ],
};

const StoreContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ACTION>;
  addPage: (page: PAGE) => void;
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
        addPage: (page: PAGE) =>
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
