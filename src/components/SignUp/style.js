import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 10,
    maxWidth: 400,

    [theme.breakpoints.up('400')]: {
      padding: 0,
      marginTop: '5vh',
    }
  },

  card: {
    borderRadius: 6,
  },

  image: {
    width: '100%',
  },

  cardContent: {

    '&:last-child': {
      paddingBottom: 20,
    },
  },

  button: {
    marginTop: 16,
  },
}));

export default useStyles;