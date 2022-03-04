import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1025,
      lg: 1441,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: "#fff",
    },
  },
});

export { theme };
