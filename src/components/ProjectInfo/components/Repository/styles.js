import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    height: theme.spacing(5)
  },
  fab: {
    backgroundColor: '#252A2D',
    color: 'white'
  },
  icon: {
    marginRight: 8
  }
}))