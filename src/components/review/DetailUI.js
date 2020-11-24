import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';




const useStyles = makeStyles(_ => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '100%',
    },
    cardContent: {
      display: "flex",
      flexDirection:"column",
      padding: "10px",
    },
  }));

const DetailUI = ({ history, movie_list }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
        <main id="main" style={{backgroundColor:"#F5F6F8", paddingLeft:"22vw"}}>
            <div style={{paddingTop:"20px"}}>
            <Container >
                <div style={{ display:"flex", flexDirection: "column", alignItems:"center"}}>
                    <Typography>Movie Detail</Typography>
                    <Grid container spacing={1}>
                    {
                        movie_list && movie_list.rows.map(movie  =>
                            <Grid item xs={3}>
                                <Card 
                                    square
                                    className={classes.card}
                                    onClick={()=>history.push(`movies/detail/${movie.id}`)}
                                >
                                    <CardMedia
                                        className={classes.cardMedia}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography style={{fontSize: "2rem", color:"#333333"}}>
                                        {movie.name}
                                        </Typography>
                                        <Typography style={{fontSize: "2rem", color:"#333333"}}>
                                        {movie.director}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                    </Grid>
                    
                </div>
            </Container>
            </div>
        </main>
        </React.Fragment>
    );
  
}

export default DetailUI;