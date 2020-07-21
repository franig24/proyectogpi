import React from 'react';
import Logo from './img/logo.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from '../../history';

const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft:60,
      paddingRight:60,
      backgroundColor:'#ffffff'
  },
  root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      paddingTop: '2em',
      paddingLeft:60,
      paddingRight:60,
      backgroundColor:'#ffffff'
  },
}));


const redirectSignUp = () => {
  history.push('SignUp')
}


export default function SignIn() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src = { Logo } height = "100" alt=""/>
        <Typography component="h1" variant="h5">
          Ingresa tus datos para acceder a la plataforma
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Rut"
            label="Rut"
            name="Rut"
            autoComplete="Rut"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Contraseña"
            label="Contraseña"
            type="Contraseña"
            id="Contraseña"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordar usuario"
          />
          <Button
            type="Ingresa"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Aceptar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="SignUp" variant="body2">
                ¿No recuerdas tu contraseña?
              </Link>
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
          <Grid container >
            <Grid item >
              <Link href="../" variant="body2"> {"← Volver"} </Link>
            </Grid >
          </Grid>
        </form>
      </div>

    </Container>

  );

}
