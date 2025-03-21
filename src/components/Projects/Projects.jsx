import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h1>Projekty</h1>
      <nav>
        <Link to="completed">Wykonane</Link> | 
        <Link to="in-progress">W trakcie</Link> | 
        <Link to="planned">W planach</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Projects;