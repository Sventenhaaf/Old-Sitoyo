declare type Page = {
  id: number;
  name: string;
  sections: Section[];
};

declare type Section = {
  id: number;
  type: "title" | "paragraph" | "image";
  name: string;
  text: string;
};

declare type InitialStateType = {
  pages: Page[];
};

declare type Action = {
  type: string;
  payload: Partial<InitialStateType>;
};
