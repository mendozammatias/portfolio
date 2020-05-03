import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: 16,
    textDecoration: 'none'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 205
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
})