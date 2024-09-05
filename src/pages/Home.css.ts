import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';
import imgHeroBg from '../assets/images/Untitled-1.jpg'

export const imgHero = style({
  width: 100,
  margin: '0 auto',
  marginTop: vars.space['1x'],
})

export const mainHero = style({
  fontFamily: vars.fonts.brand,
  margin: '0 auto',
  marginTop: vars.space['4x'],
   textAlign: "center"

})

export const subHero = style({
  fontFamily: vars.fonts.body,
  margin: '0 auto',
  marginTop: vars.space['2x'],
   textAlign: "center",
   fontSize: vars.fontSizes['4x']
})

export const bg = style({
  backgroundImage: `url(${imgHeroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '70vh'
})