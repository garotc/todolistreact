import React from 'react'
import { Link } from 'react-router-dom'



const Create = ({ tasks, setTasks, taskNumber }) => {

    function createTask(name, duration) {
        return setTasks([...tasks, { name: name, duration: duration }])
    }

    return (
        <>
            <label for="task-name">Nom de la tâche</label>
            <input type="text" id='task-name' />
            <label for="task-duration">Durée de la tâche</label>
            <input type="number" id='task-duration' />
            <Link to="/">
                <button className='button add' onClick={() => createTask(document.getElementById('task-name').value, document.getElementById('task-duration').value)}>Créer</button>
            </Link>
            <div className='back-div'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='button back'>Retour</button>
                </Link>
            </div>
        </>
    );
}

export default Create