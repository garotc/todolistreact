import '../App.css';
import { useState } from 'react';
import TaskList from './TaskList';
import Create from './Create'
import Modify from './Modify';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
          <Route path="/create" element={<Create tasks={tasks} setTasks={setTasks} />} />
          <Route path="/modify/:index" element={<Modify tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
