import React from 'react'
import {bool} from 'prop-types'

import {GitHub} from "@material-ui/icons";
import {Fab} from "@material-ui/core";

import {useStyles} from './styles'

const Repository = ({isPWA}) => {
  const classes = useStyles({isPWA})
  return (
    <Fab
      variant="extended"
      size="medium"
      aria-label="pwa"
      className={classes.fab}
    >
      <GitHub className={classes.icon}/>
      View on Github
    </Fab>
  )
}

Repository.propTypes = {
  isPWA: bool
}

Repository.defaultProps = {
  isPWA: false
}

Repository.displayName = 'Repository'

export default Repository