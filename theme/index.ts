import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({

  fonts: {
    
    body: `Poppins, ${base.fonts?.body}`,
    heading:`Poppins, ${base.fonts?.body}`,
    button:`Poppins, ${base.fonts?.body}`,
    
  },
});

export default theme;