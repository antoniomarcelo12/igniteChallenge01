import { useState } from 'react';
import { ITask } from '../../Interfaces';
import { Task } from '../Task';
import styles from './Styles.module.css'

interface IAllTasksRelated {
  allTasks: ITask[];
  setAllTasks: any;
}

interface ListTaskProps {
  taskRelated: IAllTasksRelated;
}

export function ListTask({taskRelated}: ListTaskProps) {

  const allTasks = taskRelated.allTasks
  const setAllTasks = taskRelated.setAllTasks

  const [tasksDoneCount, setTasksDoneCount] = useState(0)

  return (
    <div className={styles.listTaskContainer}>
        <header>
            <h4>Tarefas criadas <span>{allTasks.length}</span></h4>
            <h4>Concluídas <span>{ allTasks.length === 0 ? '0' : `${tasksDoneCount} de ${allTasks.length}` }</span></h4>
        </header>

      {
        allTasks.map(task => (
          <Task key={task.taskDescription} tasksDoneCount={tasksDoneCount} setTasksDoneCount={setTasksDoneCount} allTasks={allTasks} currentTask={task} setAllTasks={setAllTasks}/>
        ))
      }

    </div>

  );
}