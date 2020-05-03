import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

import {useStyles} from "./styles";

const CompanyCard = ({name, website, role, logo}) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      component={'a'}
      target="_blank"
      rel="noopener noreferer"
      href={website}>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="name"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {role}
          </Typography>
        </CardContent>
      </div>

    </Card>
  );
}

export default CompanyCard