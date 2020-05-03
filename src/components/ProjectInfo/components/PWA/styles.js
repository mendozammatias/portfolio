import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  chip: ({isPWA}) => ({
    backgroundColor: isPWA ? theme.palette.success.main : theme.palette.error.main,
    color: 'white'
  }),
  icon: {
    marginRight: 8,
    color: '#FFFFFF'
  }
}))