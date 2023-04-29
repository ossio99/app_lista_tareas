import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({ tareas, cambiarTareas }) => {

    const [inputTarea, cambiarInputTarea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputTarea.length > 0) {
            cambiarTareas([...tareas, { id: uuidv4(), texto: inputTarea, completada: false }]);
            cambiarInputTarea('');
        }
    }

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    // console.log(tareas);

    return (
        <form className="formulario-tareas">
            <input
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={handleInput}
            />
            <button
                type='submit'
                className="formulario-tareas__btn"
                onClick={handleSubmit}
            >
                <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="formulario-tareas__icono-btn"
                />
            </button>
        </form>
    )
}

export default FormularioTareas;