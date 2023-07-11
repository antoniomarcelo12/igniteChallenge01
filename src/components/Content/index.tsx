import React, { useState } from 'react';

import styles from './Content.module.css';
import { AddTask } from '../AddTask';
import {ListTask} from '../ListTask';
import { ITask } from '../../Interfaces';


export const Content: React.FC = () => {

  const [allTasks, setAllTasks] = useState<ITask[]>([])

  console.log("All tasks: ", allTasks)

  return (
    <main className={styles.centerContainer}>
      <AddTask taskRelated={{allTasks, setAllTasks}} />
      <ListTask taskRelated={{allTasks, setAllTasks}} />
    </main>
  );
}