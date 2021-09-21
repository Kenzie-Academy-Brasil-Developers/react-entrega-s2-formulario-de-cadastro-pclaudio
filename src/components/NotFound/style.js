import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '5vh',
    width: '100vw',
    textAlign: 'center',
  },

  card: {
    marginBottom: 20,
  },

  cardContent: {

    '&:last-child': {
      paddingBottom: 'inherit',
    }
  },

  image: {
    width: '100%',
  },

  errorMessage: {
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    marginBottom: 20,
  },
}));

export default useStyles;