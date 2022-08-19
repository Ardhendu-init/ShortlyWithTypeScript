import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({

  fonts: {
    
    body: `Poppins, ${base.fonts?.body}`,
    heading:`Poppins, ${base.fonts?.body}`,
    button:`Poppins, ${base.fonts?.body}`,
    
  },
  colors: {
    brand: {
      100: "#f0f1f6",
      200:"#2acfcf",
      300:"#9be3e2",
      400:"#a3a3ad",
      500:"#3a3053",
      600:"#bfbfbf",
      700:"#000",
      800:"white",
      
    },
  },
});

export default theme;