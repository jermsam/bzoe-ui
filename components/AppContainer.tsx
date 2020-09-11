import { FunctionComponent } from "react";
import { Box } from "grommet";
import styled from "styled-components";


const AppContainer = styled.div`
  background: linear-gradient(320deg, pink 25%, white);
 
  min-height: 100vh;
  > div:first-of-type {
    flex: 1 0 70vh;
  }
`
export default AppContainer

