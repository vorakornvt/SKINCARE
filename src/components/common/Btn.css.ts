import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';



export const btn = style({
  padding: `${vars.space['1x']} ${vars.space['3x']}`,
  borderRadius: '5px',
  fontSize: vars.fontSizes['2x'],
  backgroundColor: vars.colors.primary,
  color: vars.colors.complementary,
  border: `1px solid ${vars.colors.complementary}`,
  transition: 'background-color 0.2s ease-in-out',

 
  display: 'flex',          
  justifyContent: 'center', 
  alignItems: 'center',     
  margin: 'auto',       
  marginTop: vars.space['6x'],    

  ":hover": {
    color: vars.colors.brand,
    border: `1px solid ${vars.colors.brand}`,
  },
});
