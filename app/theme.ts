import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "var(--main-font)",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "var(--main-font)",
      },
    },
  },
  config,
});

export default theme;
