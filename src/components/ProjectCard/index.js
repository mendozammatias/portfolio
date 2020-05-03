import React from 'react';
import {Paper, Box, CardActionArea} from '@material-ui/core'

import {useStyles} from './styles'
import ProjectInfo from "./components/ProjectInfo";

const ProjectCard = ({year, title, description, image, link}) => {
  const classes = useStyles({image});
  return (
    <Box className={classes.container}>
      <CardActionArea
        className={classes.actionArea}
      >
        <Paper component={'a'} target="_blank" rel="noopener noreferer" href={link} className={classes.projectCard}>
          <ProjectInfo
            overline={year}
            title={title}
            info={description}
          />
        </Paper>
      </CardActionArea>
      <Paper className={classes.projectImage}/>
    </Box>
  )
}

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard