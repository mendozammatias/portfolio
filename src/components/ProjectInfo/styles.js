import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    height: '40%',
    padding: '32px 0px'
  },
  leftItems: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
   rightItems: {
     height: '100%',
   }
})