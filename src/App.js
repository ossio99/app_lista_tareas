import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from "./componentes/ListaTareas";
import { useState } from 'react';

const App = () => {
	const [tareas, cambiarTareas] = useState(
		[
			{
				id: 1,
				texto: 'Lavar la ropa',
				completada: true
			},
			{
				id: 2,
				texto: 'Grabar tutorial',
				completada: false
			}
		]
	);

	const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);



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
