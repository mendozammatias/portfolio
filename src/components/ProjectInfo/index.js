import React from 'react'
import {Grid} from "@material-ui/core";

import CompanyCard from './components/Company'
import PWA from './components/PWA'
import Technologies from './components/Technologies'
import Repository from "./components/Repository";
import {useProjectContext} from "../../hooks/useProject";
import {useStyles} from "./styles";

const ProjectInfo = () => {
const {currentProject} = useProjectContext()
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={6}
            className={classes.leftItems}
            >
        <PWA isPWA={currentProject.pwa}/>
        <Repository link={currentProject.code}/>
        <CompanyCard {...currentProject.company}/>
      </Grid>
      <Grid item xs={12} md={6}             className={classes.rightItems}>
        <Technologies data={currentProject.technologies}/>
      </Grid>
    </Grid>
  )
}

ProjectInfo.displayName = 'ProjectInfo'

export default ProjectInfo