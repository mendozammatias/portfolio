import React from 'react';
import {Paper, Box, CardActionArea, Tooltip} from '@material-ui/core'

import {useStyles} from './styles'
import ProjectInfo from "./components/ProjectInfo";

const ProjectCard = ({year, title, description, image, link, backgroundColor, reason}) => {
  const classes = useStyles({image, backgroundColor});
  return (
    <Box className={classes.container}>
      <CardActionArea
        className={classes.actionArea}
      >
        <Tooltip title={reason}>
        <Paper component={'a'} target="_blank" rel="noopener noreferer" href={link} className={classes.projectCard}>
          <ProjectInfo
            overline={year}
            title={title}
            info={description}
          />
        </Paper>
      </Tooltip>
      </CardActionArea>
      <Paper className={classes.projectImageContainer}>
        <Paper className={classes.projectImage}/>
      </Paper>
    </Box>
  )
}

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard