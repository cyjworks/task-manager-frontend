// routes/router.tsx
import { createBrowserRouter } from 'react-router-dom'; 

import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import TaskListPage from '../pages/TaskListPage';
import TaskEditPage from '../pages/TaskEditPage';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <TaskListPage />,
      },
      {
        path: '/task/:id',
        element: <TaskEditPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);
