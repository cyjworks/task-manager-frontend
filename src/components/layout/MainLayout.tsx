import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#f4f4f4' }}>
        <h1>Task Manager</h1>
      </header>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
