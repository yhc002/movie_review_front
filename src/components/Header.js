import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';

const Header = ({history}) => {
  return (
    history.location.pathname!=='/' &&
    (<AppBar position="fixed" color="default" elevation={0}>
      <Toolbar>
        header
      </Toolbar>
    </AppBar>)
  )
}

export default withRouter(Header);