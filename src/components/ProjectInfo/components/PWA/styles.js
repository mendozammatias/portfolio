import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  fab: ({isPWA}) => ({
    backgroundColor: isPWA ? theme.palette.success.main : theme.palette.error.main,
    color: 'white'
  }),
  icon: {
    marginRight: 8
  }
}))