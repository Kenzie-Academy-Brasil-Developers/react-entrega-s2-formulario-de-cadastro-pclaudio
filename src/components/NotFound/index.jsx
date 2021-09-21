import { Button, Card, CardContent, Container, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <Container className={ classes.root }>
      <Card className={ classes.card }>
        <CardContent className={ classes.cardContent }>
          <img className={ classes.image } src='/img/not_found.svg' alt='Not Found' />
        </CardContent>
      </Card>

      <Typography className={ classes.errorMessage } variant="h4" component="h2">
        Ops, algo deu errado! Está página não foi encontrada.
      </Typography>

      <Button 
        variant="contained"
        size="large"
        className={
          classes.button
        }
        color="primary"
        startIcon={
          <HomeIcon />
        }
        onClick={ handleGoHome }
      >
        Página inicial
      </Button>
    </Container>
  );
}

export default NotFound;