// routes/router.tsx
import { createBrowserRouter } from 'react-router-dom'; 

import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import TaskListPage from '../pages/TaskListPage';
import TaskEditPage from '../pages/TaskEditPage';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';

import LoginWrapper from '../components/layout/LoginWrapper';
import TaskWrapper from '../components/layout/TaskWrapper';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <LoginWrapper>
        <LoginPage />
      </LoginWrapper>
    )
  },
  {
    path: '/signup',
    element: (
      <LoginWrapper>
        <SignupPage />
      </LoginWrapper>
    )
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <TaskWrapper>
            <TaskListPage />
          </TaskWrapper>
        )
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
