import { Link, useParams } from "react-router-dom";


const Modify = ({ tasks, setTasks }) => {

    const { index } = useParams()

    function modifyTask(name, duration) {
        if (name !== "") {
            tasks[index].name = name;
        }
        if (duration !== "") {
            tasks[index].duration = duration;
        }
        return tasks
    }

    return (
        <>
            <label for="task-name">Nom de la tâche</label>
            <input type="text" id='task-name' placeholder={tasks[index].name} />
            <label for="task-duration">Durée de la tâche</label>
            <input type="number" id='task-duration' placeholder={tasks[index].duration} />
            <Link to="/">
                <button className='button modify' onClick={() => modifyTask(document.getElementById('task-name').value, document.getElementById('task-duration').value)}>Modifier</button>
            </Link>
            <div className='back-div'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='button back'>Retour</button>
                </Link>
            </div>
        </>
    );
}

export default Modify;