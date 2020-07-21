import React from 'react';
import Home from './View/Home';
import Landing from './View/Grupo1/Landing';
import SignIn from './View/Grupo2/SignIn.js'
import SignUp from './View/Grupo2/SignUp.js'
import { Route, Switch, Redirect } from 'react-router-dom';
import Laboratorio from './View/Grupo2/Laboratorio';
import Listeilor from './View/Grupo2/Listeilor';
import Listoco from './View/Grupo2/Listoco';


function App() {
	return(
  		<div>
    		<Switch>
      			<Route exact path="/Home" component={Home}/>
      			<Route exact path="/">
        			<Redirect to ="/Home"/>
        		</Route>     

				{/* Routing Grupo 1	*/}
				<Route exact path="/Grupo1/Landing" component={Landing}/>	
				<Route exact path="/Grupo1">
        			<Redirect to ="/Grupo1/Landing"/>
        		</Route>
				{/* Fin Routing Grupo 1*/}	

				{/* Routing Grupo 2	*/}
				<Route exact path="/Grupo2/SignIn" component={SignIn}/>
				<Route exact path="/Grupo2/SignUp" component={SignUp}/>
				<Route exact path="/Grupo2/Laboratorio" component={Laboratorio}/>
				<Route exact path="/Grupo2/Listeilor" component={Listeilor}/>
				<Route exact path="/Grupo2/Listoco" component={Listoco}/>
				<Route exact path="/Grupo2">
        			<Redirect to ="/Grupo2/Laboratorio"/>
        		</Route>
				{/* Fin Routing Grupo 2*/}	
    		</Switch>
    		
  		</div>
  );
}
  
export default App;
