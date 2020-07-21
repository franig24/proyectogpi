import React from 'react';
import Logo from './img/logo.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#ffffff'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: '2em',
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#ffffff'
  },
}));



export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} height="100" alt="" />
        <Typography component="h1" variant="h5">
          Ingresa Tu Rut
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Rut"
                label="Rut"
                name="Rut"
                autoComplete="Rut"
                autoFocus/>
            </Grid>

          </Grid>
          <Button

          href="Listoco"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Aceptar
          </Button>
          <Grid container justify="flex-end">
            <Grid item >
              <Link href="../" variant="body2" > {"← Volver"} </Link>
            </Grid >
          </Grid>
        </form>
      </div>
    </Container>
  );
}