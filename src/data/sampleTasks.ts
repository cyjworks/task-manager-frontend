import { TaskItemProps } from '../components/ui/TaskItem';

export const sampleTasks: TaskItemProps[] = [
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
