import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { logout } from '../modules/auth';

const Menu = ({history}) => {
  const dispatch = useDispatch();
  const { scope } = useSelector(({ auth }) => {
    if(auth.auth) {
      return {
        scope: auth.auth.scope,
      }
    }
    return {scope: null}
  });

  const initiateLogout = () => {
    dispatch(logout('login'));
    history.replace('/')
  }
  return (
    history.location.pathname!=='/' &&
    (<Drawer variant='permanent' elevation={0} PaperProps={{ top:"56px" }}>
      <List>
        <ListItem>
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem
          button
          selected={history.location.pathname.includes('/movies')}
          onClick={()=>history.push('/movies')}
        >
          <ListItemText primary="영화 목록" />
        </ListItem>
        <ListItem
          button
          selected={history.location.pathname.includes('/mypage')}
          onClick={()=>history.push('/mypage')}
        >
          <ListItemText primary="마이페이지" />
        </ListItem>
        <ListItem button onClick={initiateLogout}>
          <ListItemText primary="로그아웃" />
        </ListItem>
      </List>
    </Drawer>)
  )
}

export default withRouter(Menu);