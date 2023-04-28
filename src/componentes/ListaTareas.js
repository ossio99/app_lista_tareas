import React from 'react'
import Tarea from "./Tarea";

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {
    const toggleCompletada = id => {
        cambiarTareas(tareas.map(tarea => {
            if(tarea.id === id) {
                return {...tarea, completada: !tarea.completada}
            }else{
                return tarea
            }
        }));
    }

    const actualizarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map(tarea => {
            if(tarea.id === id) {
                return {...tarea, texto: nuevoTexto}
            }else {
                return tarea;
            }
        }))
    }

    const eliminarTarea = id => {
        cambiarTareas(tareas.filter(tarea => {
            if(tarea.id !== id) {
                return tarea;
            }
            return;
        }))
    }

    return (
        <ul className='lista-tareas'>
            {
                tareas.length > 0
                    ?
                        tareas.map(tarea => 
                            mostrarCompletadas
                                ?
                                    <Tarea 
                                        key={tarea.id} 
                                        tarea={tarea} 
                                        toggleCompletada={toggleCompletada}
                                        actualizarTarea={actualizarTarea}
                                        eliminarTarea={eliminarTarea}
                                    />
                                :
                                    !tarea.completada
                                        &&
                                            <Tarea 
                                                key={tarea.id} 
                                                tarea={tarea} 
                                                toggleCompletada={toggleCompletada}
                                                actualizarTarea={actualizarTarea}
                                                eliminarTarea={eliminarTarea}
                                            />
                        )
                            
                    :
                        <div className='lista-tareas__mensaje'>
                            No hay tareas agregadas
                        </div>
            }
        </ul>
    )
}

export default ListaTareas;
