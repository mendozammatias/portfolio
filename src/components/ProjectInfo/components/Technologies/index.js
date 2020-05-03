import React from 'react'
import {Typography, GridList, GridListTile} from "@material-ui/core";

import {useStyles} from "./styles";

const Technologies = ({data}) => {
  const classes = useStyles();
  return (
    <Typography variant={'h3'}>
      Tecnologías
      <div className={classes.root} style={{paddingTop: 16}}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {data.map((tile) => (
            <GridListTile key={tile.name} cols={tile.cols || 1} style={{backgroundImage: `url(${tile.image})`,}} className={classes.tile}/>
          ))}
        </GridList>
      </div>
    </Typography>
  )
}

Technologies.displayName = 'Technologies'

export default Technologies