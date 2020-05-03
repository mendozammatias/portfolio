import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '50%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fab: {
    minWidth: 56,
    minHeight: 56,
    zIndex: 3
  }
})