import { useDispatch, useSelector } from "react-redux";
import { unsignUp } from "../../store/modules/SignUp/actions";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './style';

const Home = () => {
  const isSignedUp = useSelector(store => store.isSignedUp);
  const params = useParams();
  const name = params.name.split('').map(char => char === '-' ? ' ' : char).join('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoHome = () => {
    dispatch(unsignUp());
    history.push('/');
  };
  
  return (
    <>
      { isSignedUp ? 
        (
          <>
            <Container className={ classes.root }>
              <Card className={ classes.card }>
                <CardContent className={ classes.cardContent }>
                  <img className={ classes.image } src='/img/welcome.svg' alt='Welcome' /> 

                  <Typography className={ classes.message } variant="h4" component="h2">
                    Bem vindo, { name }!
                  </Typography>
                </CardContent>
              </Card>


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
          </>
        ) : 
        (
          <Redirect to='/' />
        ) 
      }
    </>
  );
};

export default Home;