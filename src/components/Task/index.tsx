import { Trash } from 'phosphor-react';
import styles from './Styles.module.css'
import { ITask } from '../../Interfaces';

interface TaskProps {
  currentTask: ITask;
  setAllTasks: (allTasks: ITask[]) => void;
  allTasks: ITask[];
  setTasksDoneCount: (D: number) => void;
  tasksDoneCount: number;
}

export function Task({currentTask, setAllTasks, allTasks, setTasksDoneCount, tasksDoneCount}: TaskProps) {

  function deleteTask() {
    setAllTasks(
      allTasks.filter((T) => T.taskDescription !== currentTask.taskDescription)
    )

    currentTask.isTaskDone ? setTasksDoneCount(tasksDoneCount - 1) : setTasksDoneCount(tasksDoneCount)
  }
  
  function changeTaskStatus() {
   allTasks.forEach((T) => T.taskDescription === currentTask.taskDescription ? currentTask.isTaskDone = !currentTask.isTaskDone : currentTask.isTaskDone)
   currentTask.isTaskDone ? setTasksDoneCount(tasksDoneCount + 1) : setTasksDoneCount(tasksDoneCount - 1)
  }

  return (
    <div className={styles.taskContainer}>
        <input className={styles.checkbox} type="checkbox" name="" id="" onChange={changeTaskStatus} />
        <p className={currentTask.isTaskDone ? `${styles.done}` : ''}>{currentTask.taskDescription}</p>
        
        <button onClick={deleteTask}>
          <Trash size={20} />
        </button>
        
    </div>
  );
}