import Button from '@mui/material/Button';
import TaskItem, {TaskItemProps} from '../components/ui/TaskItem'
import { useState } from 'react';

export default function LoginPage() {
  const [task, setTask] = useState<TaskItemProps[]>([]);
  const sampleTasks: TaskItemProps[] = [
    {
      type: 'STUDY',
      title: 'Math Revision - Algebra',
      startDate: '2025-05-01',
      endDate: '2025-05-03',
      progress: 'IN_PROGRESS',
      priority: 'HIGH',
    },
    {
      type: 'WORK',
      title: 'Prepare Quarterly Report',
      endDate: '2025-05-07',
      progress: 'TO_DO',
      priority: 'MEDIUM',
    },
    {
      type: 'HABIT',
      title: 'Morning Workout',
      progress: 'IN_PROGRESS',
      priority: 'LOW',
    },
    {
      type: 'GOAL',
      title: 'Read 12 books this year',
      progress: 'TO_DO',
    },
    {
      type: 'STUDY',
      title: 'Finish AI Capstone Draft',
      startDate: '2025-04-28',
      endDate: '2025-05-10',
      progress: 'DONE',
      priority: 'HIGH',
    },
  ];

  const onClickSetTask = () => {
    setTask(sampleTasks)
  }

    return (<div>
      <h2>Login Page</h2>
      
      {task.map(taskItem => <TaskItem {...taskItem}/>)}
      <Button variant="contained" onClick={onClickSetTask}>Submit</Button>
      </div>);
  }
  