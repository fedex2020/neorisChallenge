import  {  keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
export const slideIn = keyframes`
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 0px;
  }
`

export const slideOut = keyframes`
  0% {
    bottom: 0px;
  }
  100% {
    bottom: -200px;
  }
`
export const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`