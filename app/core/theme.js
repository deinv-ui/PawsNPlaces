import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#2F2F2F",
    black: "#191919",
    white: "#F4F4F4",
    primary: "#4C4C9D",
    secondary: "#1F2732",
    error: "#ED1C24",
  },
  fonts: {
    title: {
      regular: {
        fontFamily: 'EmilysCandy_400Regular',
      },
    },
    content: {
      regular: {
        fontFamily: 'Buenard_400Regular',
      },
      medium: {
        fontFamily: 'Buenard_700Bold',
      },
      light: {
        fontFamily: 'Buenard_400Regular',
      },
      thin: {
        fontFamily: 'Buenard_400Regular',
      },
    }
   
  },
  
};
