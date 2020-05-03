import React from 'react'
import {Grid} from "@material-ui/core";
import CompanyCard from './components/Company'
import PWA from './components/PWA'
import Technologies from './components/Technologies'
import Repository from "./components/Repository";
import {useProjectContext} from "../../hooks/useProject";

const ProjectInfo = () => {
const {currentProject} = useProjectContext()
  return (
    <Grid container style={{height: '50%', padding: '32px 0px'}}>
      <Grid item xs={12} md={6}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <PWA isPWA={currentProject.pwa}/>
        { currentProject.code &&       <Repository link={currentProject.code}/>}
        <CompanyCard {...currentProject.company}/>
        Mi Rol
        Holas
      </Grid>
      <Grid item xs={12} md={6}>
        <Technologies data={currentProject.technologies}/>
      </Grid>
    </Grid>
  )
}

ProjectInfo.displayName = 'ProjectInfo'

export default ProjectInfo