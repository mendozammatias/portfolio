import React from 'react'
import {bool} from 'prop-types'

import {Check, Clear} from "@material-ui/icons";
import {Chip} from "@material-ui/core";

import {useStyles} from './styles'

const PWA = ({isPWA}) => {
  const classes = useStyles({isPWA})
  return (
    <Chip
      icon={isPWA ? <Check className={classes.icon}/> : <Clear className={classes.icon}/>}
      label="Progressive Web App"
      className={classes.chip}
    />
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