import React from 'react';
import {string, number} from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

const ProjectInfo = ({overline, title, info}) => {
  const classes = useStyles();
  return (
    <span className={classes.container}>
            <Typography
              component={'span'}
              className={classes.overline}
            >
                {overline}
            </Typography>
            <Typography
              component={'h4'}
              className={classes.title}
            >
                {title}
            </Typography>
            <Typography className={classes.info}>
                {info}
            </Typography>
        </span>
  );
};

ProjectInfo.propTypes = {
  overline: number || string,
  title: string,
  info: string,
};

ProjectInfo.defaultProps = {
  overline: '',
  heading: '',
  body: '',
};

export default ProjectInfo;