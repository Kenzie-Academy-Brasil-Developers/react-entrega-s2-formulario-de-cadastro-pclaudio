import { useForm } from 'react-hook-form';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/modules/SignUp/actions';
import { Button, Card, CardContent, Container, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (user) => {
    const name = user.name.split('').map(char => char === ' ' ? '-' : char).join('');

    dispatch(signUp());

    history.push(`/home/${ name }`);
  };
  
  return (
    <Container className={ classes.container }>
      <Card className={ classes.card }>
        <img className={ classes.image } src='/img/authentication.svg' alt='Authentication' />

        <CardContent className={classes.cardContent }>
          <form onSubmit={ handleSubmit(handleSignUp) }>
            <TextField
              autoFocus
              margin='dense'
              type='text'
              fullWidth
              label='Nome *'
              error={ 'name' in errors }
              helperText={ errors.name?.message }
              { ...register('name') }
            />

            <TextField
              margin='dense'
              type='text'
              fullWidth
              label='E-mail *'
              error={ 'email' in errors }
              helperText={ errors.email?.message }
              { ...register('email') }
            />

            <TextField
              margin='dense'
              type='password'
              fullWidth
              label='Senha *'
              error={ 'password' in errors }
              helperText={ errors.password?.message }
              { ...register('password') }
            />

            <TextField
              margin='dense'
              type='password'
              fullWidth
              label='Confirmar senha *'
              error={ 'passwordConfirmation' in errors }
              helperText={ errors.passwordConfirmation?.message }
              { ...register('passwordConfirmation') }
            />

            <Button
              fullWidth
              variant='contained'
              size='large'
              type='submit'
              className={
                classes.button
              }
              color='primary'
              startIcon={
                <AddIcon />
              }
            >
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;