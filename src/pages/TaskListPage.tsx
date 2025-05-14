import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
// import { Box, Typography, CircularProgress } from '@mui/material';
import TaskItem, { TaskItemProps } from '../components/ui/TaskItem';
// import api from '../lib/axios';
// import { AxiosError } from 'axios';
import { sampleTasks } from '../data/sampleTasks';

export default function TaskListPage() {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

  useEffect(() => {
    setTasks(sampleTasks);
    // const fetchTasks = async () => {
    //   try {
    //     const res = await api.get('/tasks');
    //     setTasks(res.data);
    //   } catch (err) {
    //     const axiosError = err as AxiosError<{ message: string }>;
    //     setError(axiosError.response?.data?.message || 'Failed to load tasks.');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchTasks();
  }, []);

//   if (loading) return <CircularProgress sx={{ mt: 6, display: 'block', mx: 'auto' }} />;
//   if (error) return <Typography color="error" mt={6} textAlign="center">{error}</Typography>;

  return (
    <Box width="100%" maxWidth="1200px" mx="auto" mt={6} px={3}>
    <Typography variant="h4" fontWeight="bold" mb={4}>
        Your Tasks
      </Typography>

      {tasks.length === 0 ? (
        <Typography>No tasks found.</Typography>
      ) : (
        tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))
      )}
    </Box>
  );
}
