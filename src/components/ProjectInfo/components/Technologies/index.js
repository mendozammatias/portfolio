import React from 'react'
import {Typography, GridList, GridListTile, Tooltip, Paper} from "@material-ui/core";

import {useStyles} from "./styles";

const Technologies = ({data}) => {
  const classes = useStyles();
  return (
    <Typography variant={'h3'}>
      Tecnologías
      <div className={classes.root} style={{paddingTop: 16}}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {data.map(({name, image, link}) => (
            <GridListTile key={name} cols={1}>
              <Tooltip title={name}>
                <Paper
                  component={'a'}
                  target="_blank"
                  rel="noopener noreferer"
                  href={link}
                  className={classes.tile}>
                  <img src={image} alt={name} className={classes.image}/>
                </Paper>
              </Tooltip>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Typography>
  )
}

Technologies.displayName = 'Technologies'

export default Technologies