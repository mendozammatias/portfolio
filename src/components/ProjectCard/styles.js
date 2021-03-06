import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    position: 'relative',
    minWidth: 400,
    maxWidth: 500,
    minHeight: 450
  },
  projectCard: {
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingBottom: 32,
    paddingRight: 16
  },
  actionArea: {
    height: '85%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 16,
  },
  projectImageContainer: ({backgroundColor}) => ({
    width: '88%',
    height: '55%',
    position: 'absolute',
    left: '6%',
    borderRadius: 16,
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)',
    backgroundColor,
    padding: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  projectImage: ({image}) => ({
    background: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    boxShadow: 'none',
    padding: 32
  })
});

