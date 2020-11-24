import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const LoginUI = ({ history, form, onChange, onSubmit, error }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <main id="main" style={{backgroundColor:"#F5F6F8"}}>
        <div style={{paddingTop:"20px"}}>
          <Container >
            <div style={{ display:"flex", flexDirection: "column", alignItems:"center", marginBottom:"10px" }}>
                <Typography>Movie Review</Typography>
                <Textfield
                    variant="outlined"
                    placeholder="아이디"
                    name="email"
                    fullWidth
                    style={{ backgroundColor:"white", marginBottom:"10px" }}
                    value={form.login_id}
                    onChange={onChange}
                    error={error!=null}
                />
                <Textfield
                    type="password"
                    placeholder="비밀번호"
                    fullWidth
                    variant="outlined"
                    name="password"
                    style={{ backgroundColor:"white", marginBottom:"10px" }}
                    value={form.password}
                    onChange={onChange}
                    error={error!=null}
                    helperText={error}
                />
            </div>

            <div style={{ display:"flex", flexDirection: "column", alignItems:"center", marginTop:"50px", marginBottom:"40px" }}>
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    style={{ marginBottom:"10px"}}
                    onClick={()=>onSubmit()}
                >
                    로그인
                </Button>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
  
}

export default LoginUI;