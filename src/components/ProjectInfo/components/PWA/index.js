import React from 'react'
import {bool} from 'prop-types'

import {Check, Clear} from "@material-ui/icons";
import {Fab} from "@material-ui/core";

import {useStyles} from './styles'

const PWA = ({isPWA}) => {
  const classes = useStyles({isPWA})
  return (
    <Fab
      variant="extended"
      size="medium"
      aria-label="pwa"
      className={classes.fab}
    >
      {isPWA ? <Check className={classes.icon}/> : <Clear className={classes.icon}/>}
      Progressive Web App
    </Fab>
  )
}

PWA.propTypes = {
  isPWA: bool
}

PWA.defaultProps = {
  isPWA: false
}

PWA.displayName = 'PWA'

export default PWA