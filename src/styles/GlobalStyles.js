import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:boerder-box;
}
body{
  font-size:14px;
  font-family: sans-serif;
}
button{
  border:none;
  background-color:transparent;
  
  
}
`
export default GlobalStyles
