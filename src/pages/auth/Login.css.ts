import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 


export const logInset = style({
  
  width: "50rem",
  margin: 'auto',
  marginTop: vars.space['5x'],
  border: `1px solid ${vars.colors.complementary}`,
  padding: `${vars.space['1x']} ${vars.space['3x']}`,
  borderRadius: '5px',
  backgroundColor: vars.colors.primary,
  color: vars.colors.complementary,
  transition: 'background-color 0.2s ease-in-out',
   
});

export const mainText = style({
  fontSize: vars.fontSizes["4x"],
  fontFamily: vars.fonts.body,
  margin: vars.space['3x'],
  display: 'flex',          
  justifyContent: 'center', 
  alignItems: 'center',     
  lineHeight: "20px"
})