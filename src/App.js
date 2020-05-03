import React from 'react';
import theme from './theme'
import {ThemeProvider, CssBaseline, Container} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import Carousel from './components/Carousel'
import ProjectInfo from "./components/ProjectInfo";
import {ProjectProvider} from "./hooks/useProject";

const useStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <ProjectProvider>
        <CssBaseline/>
        <Container className={classes.container}>
          <Carousel/>
          <ProjectInfo/>
        </Container>
      </ProjectProvider>
    </ThemeProvider>
  )
}

export default App;
