import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Login, Movies } from './pages'
import Header from './components/Header'
import Menu from './components/Menu'
import ThemePalette from './MuiTheme'

const App = () => {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Menu />
      <Route exact path="/" component={Login}/>
      <Route exact path="/movies" component={Movies}/>
    </BrowserRouter>
  );
}

export default App;
