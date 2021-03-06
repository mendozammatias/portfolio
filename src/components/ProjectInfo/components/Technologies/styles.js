import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: 16
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  tile: {
    padding: 8,
    borderRadius: 16,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  image: {
    width: 'calc(100% - 16px)',
    height: 'calc(100% - 16px)'
  }
})