import { Box, Typography, Chip } from '@mui/material';
import type { ChipProps } from '@mui/material';

export interface TaskItemProps {
  type: 'STUDY' | 'WORK' | 'HABIT' | 'GOAL';
  title: string;
  startDate?: string;
  endDate?: string;
  progress: 'TO_DO' | 'IN_PROGRESS' | 'DONE';
  priority?: 'HIGH' | 'MEDIUM' | 'LOW';
}

// Define chip colors for progress status
const progressColor: Record<TaskItemProps['progress'], ChipProps['color']> = {
  TO_DO: 'default',
  IN_PROGRESS: 'info',
  DONE: 'success',
};

// Define chip colors for task priority
const priorityColor: Record<NonNullable<TaskItemProps['priority']>, ChipProps['color']> = {
  HIGH: 'error',
  MEDIUM: 'warning',
  LOW: 'success',
};

const TaskItem = (props: TaskItemProps) => {
  const { type, title, startDate, endDate, progress, priority } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border={1}
      borderColor="grey.300"
      borderRadius={2}
      p={2}
      mb={1.5}
      bgcolor="#fff"
    >
      {/* Left section: title, type, and optional dates */}
      <Box>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {type} {startDate && `• ${startDate}`} {endDate && `~ ${endDate}`}
        </Typography>
      </Box>

      {/* Right section: progress and priority chips */}
      <Box display="flex" flexDirection="column" alignItems="flex-end" gap={1}>
        <Chip label={progress} color={progressColor[progress]} size="small" />
        {priority && (
          <Chip
            label={priority}
            color={priorityColor[priority]}
            size="small"
            variant="outlined"
          />
        )}
      </Box>
    </Box>
  );
};

export default TaskItem;
