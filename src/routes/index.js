import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import SignUp from '../components/SignUp';

const Routers = () => {

  return (
    <Switch>
      <Route exact path='/' component={ SignUp } />
      <Route exact path='/home' component={ Home } />
      <Route path='/home/:name' component={ Home } />
      <Route component={ NotFound } />
    </Switch>
  );
};

export default Routers;