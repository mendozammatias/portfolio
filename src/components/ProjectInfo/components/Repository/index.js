import React from 'react'
import {string} from 'prop-types'

import {GitHub} from "@material-ui/icons";
import {Fab} from "@material-ui/core";

import {useStyles} from './styles'

const Repository = ({link}) => {
  const classes = useStyles()
  return (
    <Fab
      variant="extended"
      size="medium"
      aria-label="pwa"
      className={classes.fab}
      onClick={link}
    >
      <GitHub className={classes.icon}/>
      View on Github
    </Fab>
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