import { useTheme } from '@mui/material';
import { Logo } from './logo';

export const Loader = () => {
   const theme = useTheme();
   return (
      <Logo
         size={100}
         sx={{
            '@keyframes pulse': {
               '0%': {
                  opacity: 1,
               },
               '50%': {
                  opacity: 0.4,
               },
               '100%': {
                  opacity: 1,
               },
            },
            animation: 'pulse 1.5s ease-in-out 0.5s infinite',
            color: theme.palette.mode === 'light' ? 'grey.300' : 'grey.600',
            textAlign: 'center',
            px: 3,
            py: 8,
         }}
      />
   );
};
