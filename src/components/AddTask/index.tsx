import { useState } from 'react';
import { PlusCircle } from 'phosphor-react'

import { ITask } from '../../Interfaces';

import styles from './AddTask.module.css';

interface IAddTask {
  allTasks: ITask[];
  setAllTasks: any;
}

interface AddTaskProps {
  taskRelated: IAddTask
}

export function AddTask({taskRelated}: AddTaskProps) {

  const [taskName, setTaskName] = useState('')
  
  const onSubmit = (event: any) => {
    event?.preventDefault()
    const taskToSubmit = {
      taskDescription: taskName,
      isTaskDone: false
    }

    taskRelated.setAllTasks(
      [...taskRelated.allTasks, taskToSubmit]
    )
    setTaskName('')
  }


  return (
    <form className={styles.formAddTask} onSubmit={onSubmit} >
        <input type="text" placeholder='Adicione uma nova tarefa' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <button className={styles.createTaskBtn} type="submit">Criar <PlusCircle size={20} /></button>
    </form>
    );
}

