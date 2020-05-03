import React from 'react'
import {string} from 'prop-types'

import {Fab, Box} from "@material-ui/core";
import {GitHub} from "@material-ui/icons";

import {useStyles} from './styles'

const Repository = ({link}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      {
        link &&
        <Fab
          variant="extended"
          size="medium"
          aria-label="pwa"
          className={classes.fab}
          component={'a'}
          target="_blank"
          rel="noopener noreferer"
          href={link}
        >
          <GitHub className={classes.icon}/>
          View on Github
        </Fab>
      }
    </Box>
  )


}

Repository.propTypes = {
  link: string
}

Repository.defaultProps = {
  link: null
}

Repository.displayName = 'Repository'

export default Repository