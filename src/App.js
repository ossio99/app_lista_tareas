import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from "./componentes/ListaTareas";
import { useState, useEffect } from 'react';

const App = () => {
	//tareas guardadas
	let tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
	const [tareas, cambiarTareas] = useState(tareasGuardadas);
	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tareas));

		//   return () => {
		// 	second
		//   }
	}, [tareas])

	//estado mostrarCompletadas
	let configMostrarCompletadas = '';
	if(localStorage.getItem('mostrarCompletadas') === null) {
		configMostrarCompletadas = true;
	}else {
		configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === true;
		// configMostrarCompletadas = JSON.parse(localStorage.getItem('mostrarCompletadas'));
	}
	const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
	useEffect(() => {
		localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());

		// return () => {
		// 	second
		// }
	}, [mostrarCompletadas])





	return (
		<div className='contenedor'>
			<Header
				mostrarCompletadas={mostrarCompletadas}
				cambiarMostrarCompletadas={cambiarMostrarCompletadas}
			/>
			<FormularioTareas
				tareas={tareas}
				cambiarTareas={cambiarTareas}
			/>
			<ListaTareas
				tareas={tareas}
				cambiarTareas={cambiarTareas}
				mostrarCompletadas={mostrarCompletadas}
			/>
		</div>
	);
}

export default App;
