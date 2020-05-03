import React from 'react'
import {Grid, Box} from "@material-ui/core";
import MyCard from './components/Company'
import PWA from './components/PWA'
import Technologies from './components/Technologies'
import Repository from "./components/Repository";

const ProjectInfo = () => {

  return (
    <Grid container style={{height: '50%', padding: '32px 0px'}}>
      <Grid item xs={12} md={6}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <PWA/>
        <Repository/>
      <Box style={{display: 'flex'}}>
        <MyCard/>
        <MyCard/>
      </Box>
        Mi Rol
        Holas
      </Grid>
      <Grid item xs={12} md={6}>
        <Technologies/>
      </Grid>
    </Grid>
  )
}

ProjectInfo.displayName = 'ProjectInfo'

export default ProjectInfo