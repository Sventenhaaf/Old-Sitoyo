import { FC, ReactNode, createContext, useReducer, Dispatch } from "react";
import reducer from "./reducer";
import { site } from "./sitoyoSite";

const initialState = site;

const StoreContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ACTION>;
  addPage: (page: PAGE) => void;
  addSection: (pageId: number, section: SECTION, nextId: number | null) => void;
  updateSection: (id: number, section: SECTION) => void;
}>({
  state: initialState,
  dispatch: () => null,
  addPage: () => {},
  addSection: () => {},
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
        addSection: (pageId: number, section: SECTION, nextId: number | null) => {
          const page = state.pages.find((p) => p.id == pageId);
          if (!page) return;
          const index = page.sections.findIndex((s) => s.id === nextId);
          const before = page.sections.slice(0, index);
          const after = page.sections.slice(index);
          const newSections = [...before, section, ...after];
          dispatch({
            type: "ADD_SECTION",
            payload: {
              pages: state.pages.map((page) => (page.id == pageId ? { ...page, sections: newSections } : page)),
            },
          });
        },
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
