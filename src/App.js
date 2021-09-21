import '@fontsource/roboto';
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import theme from './theme';

const App = () => {

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <Routers />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;