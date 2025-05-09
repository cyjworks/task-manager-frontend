import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import TaskItem, { TaskItemProps } from '../components/ui/TaskItem';

export default function TaskListPage() {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  const sampleTasks: TaskItemProps[] = [
    {
      type: 'STUDY',
      title: 'Finish Math Revision',
      startDate: '2025-05-01',
      endDate: '2025-05-02',
      progress: 'TO_DO',
      priority: 'HIGH',
    },
    {
      type: 'WORK',
      title: 'Submit report to manager',
      endDate: '2025-05-03',
      progress: 'IN_PROGRESS',
      priority: 'MEDIUM',
    },
    {
      type: 'HABIT',
      title: 'Drink 1L water',
      progress: 'DONE',
      priority: 'LOW',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setTasks(sampleTasks);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Box maxWidth="800px" mx="auto" mt={6} px={2}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Your Tasks
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : tasks.length === 0 ? (
        <Typography>No tasks found.</Typography>
      ) : (
        tasks.map((task, index) => (
          <Box key={index} mb={2}>
            <TaskItem {...task} />
          </Box>
        ))
      )}
    </Box>
  );
}
