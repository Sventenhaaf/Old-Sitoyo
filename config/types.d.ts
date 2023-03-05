declare type PAGE = {
  id: number;
  name: string;
  sections: SECTION[];
};

declare type InitialStateType = {
  pages: PAGE[];
};

declare type ACTION = {
  type: string;
  payload: Partial<InitialStateType>;
};

declare type SECTION_TYPE = "title" | "paragraph" | "image";

declare type BASE_SECTION = {
  id: number;
  type: SECTION_TYPE;
};

declare type TITLE_SECTION = BASE_SECTION & {
  type: "title";
  title: string;
  subTitle?: string;
};

declare type PARAGRAPH_SECTION = BASE_SECTION & {
  type: "paragraph";
  text: string;
};

declare type IMAGE_SECTION = BASE_SECTION & {
  type: "image";
  imgUrl: string;
  description?: string;
};

declare type SECTION = TITLE_SECTION | PARAGRAPH_SECTION | IMAGE_SECTION;
