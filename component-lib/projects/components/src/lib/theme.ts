import { InputStyles } from "./input-styles";

export interface ITheme {
  input: InputStyles;
};

export const VarsityColors = {
  primary: "blue"
}

export const FloColors = {
  primary: "red"
}


export const VarsityTheme: ITheme = {
  input: {
    color: VarsityColors.primary,
    fontSize: "2rem",
    border: {
      color: VarsityColors.primary,
      size: "2px"
    }
  }
}

export const FloTheme: ITheme = {
  input: {
    color: FloColors.primary,
    fontSize: "2rem",
    border: {
      color: FloColors.primary,
      size: "2px"
    }
  }
}
