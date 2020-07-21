import React from 'react';
import logo from '../logo.svg';
import '../css/Home.css';
import Button from '@material-ui/core/Button';
import history from '../history';

function Home() {

  const redirectGrupo1 = () =>
  {
    history.push('/Grupo1')
  }
  const redirectGrupo2 = () =>
  {
    history.push('/Grupo2/')
  }
  const redirectGrupo3 = () =>
  {
    {/*history.push('/Grupo3')*/}
  }
  const redirectGrupo4 = () =>
  {
    {/*history.push('/Grupo4')*/}
  }
  const redirectGrupo5 = () =>
  {
    {/*history.push('/Grupo5')*/}
  }

  return (
        
      <div className="App">
        <div className="grupo-navbar">
          <Button onClick={redirectGrupo1} variant="contained" color = "primary">Grupo1</Button>
          <Button onClick={redirectGrupo2} variant="contained" color = "secondary">Grupo2</Button>
          <Button onClick={redirectGrupo3} variant="contained" color = "primary">Grupo3</Button>
          <Button onClick={redirectGrupo4} variant="contained" color = "secondary">Grupo4</Button>
          <Button onClick={redirectGrupo5} variant="contained" color = "primary">Grupo5</Button>
        </div>
        <header className="Home-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Home
          </p>
        </header>
      
    </div>  
    );
}

export default Home;
