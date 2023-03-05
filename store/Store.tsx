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
        {
          id: 2,
          type: "title",
          title: "This is another title",
          subTitle: "Subtitle",
        },
      ],
    },

    // {
    //   id: 1,
    //   name: "Home",
    //   sections: [
    //     {
    //       id: 1,
    //       type: "title",
    //       title: "This is the title",
    //       subTitle: "Subtitle",
    //     },
    //   ],
    // },
  ],
};

const StoreContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ACTION>;
  addPage: (page: PAGE) => void;
  updateSection: (id: number, section: SECTION) => void;
}>({
  state: initialState,
  dispatch: () => null,
  addPage: () => {},
  updateSection: () => {},
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
        updateSection: (id: number, section: SECTION) =>
          dispatch({
            type: "UPDATE_SECTION",
            payload: {
              pages: state.pages.map((page) => ({
                ...page,
                sections: page.sections.map((s) => (s.id === id ? section : s)),
              })),
            },
          }),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { Store, StoreContext };
