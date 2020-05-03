import React from 'react';
import {Paper, Box, CardActionArea} from '@material-ui/core'

import {useStyles} from './styles'
import ProjectInfo from "./components/ProjectInfo";

const ProjectCard = ({year, title, description, image, link, backgroundColor}) => {
  const classes = useStyles({image, backgroundColor});
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
      <Paper className={classes.projectImageContainer}>
        <Paper className={classes.projectImage}/>
      </Paper>
    </Box>
  )
}

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard