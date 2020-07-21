import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from '../../history';
import Logo from './img/logo.png';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles } from '@material-ui/core/styles';

const SignIn = () =>
{
  history.push('SignIn')
}


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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Laboratorio() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const Listeilor = () =>
    {
      history.push('Listeilor')
    }
    const Listoco = () =>
    {
      history.push('Listoco')
    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText('#f99f31'),
          backgroundColor: '#f99f31',
          '&:hover': {
            backgroundColor: '#f99f31',
          },
        },
      }))(Button);

    return (
    <Container component = "main" maxWidth = "xs">
        <CssBaseline />
        
            <div className = { classes.paper } >

            <img src = { Logo } height = "100" alt=""/>
            <Typography variant = "h3" >Ingrese sus datos </Typography>
            <Typography variant = "h6" >Estos datos se enviarán al Laboratorio de Evaluación de la Condición Física de Quintero (LECOFQ) y le llegará un correo confirmando su hora de atención. </Typography>  
            <form className = { classes.form }noValidate >
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <TextField required id="nombre" name="nombre" label="Nombre" fullWidth autoComplete="formulario nombre"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="correo" name="correo" label="Correo" fullWidth autoComplete="formulario correo"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="telefono" name="telefono" label="Telefono (opcional)" fullWidth autoComplete="formulario telefono"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="telefonoApoderado" name="telefonoApoderado" label="Telefono Apoderado" fullWidth autoComplete="formulario telefono apoderado"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="rut" name="rut" label="Rut" fullWidth autoComplete="formulario rut"/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={classes.form}>
                            <InputLabel id="demo-simple-select-label">Localidad (opcional)</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                                <MenuItem value={"Santa Luisa"}>Santa Luisa</MenuItem>
                                <MenuItem value={"Santa Adela"}>Santa Adela</MenuItem>
                                <MenuItem value={"Santa Julia"}>Santa Julia</MenuItem>
                                <MenuItem value={"Mantagua"}>Mantagua</MenuItem>
                                <MenuItem value={"Valle Alegre"}>Valle Alegre</MenuItem>
                                <MenuItem value={"Loncura"}>Loncura</MenuItem>
                                <MenuItem value={"Quintero"}>Quintero</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="rut" name="direccion" label="Direccion (opcional)" fullWidth autoComplete="formulario direccion"/>
                    </Grid>

                </Grid>


                <ColorButton onClick={Listeilor} type = "submit"fullWidth variant = "contained" color = "Red" className = { classes.submit }>Listo!

                </ColorButton>
                <ColorButton onClick={SignIn} type = "submit"fullWidth variant = "contained" color = "Red" className = { classes.submit }>Si estas Registrado, Haz click aquí
                </ColorButton>
                <Grid container >
                    <Grid item >
                        <Link href = "../" variant = "body2" > { "← Volver" } </Link> 
                    </Grid > 
                </Grid> 
            </form >
        </div> 
    </Container>
    );
}