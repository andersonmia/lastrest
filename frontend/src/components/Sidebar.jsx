import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (paths) => {
    return paths.includes(location.pathname) ? 'bg-primary-700 text-white' : '';
  };

  return (
    <div className="bg-gray-100 sidebar w-64 text-primary-800 h-screen pt-12 dark:bg-gray-900">
      <nav>
        <ul className="flex flex-col space-y-5">
          <li>
            <Link to="/employees" className={`block w-full p-2  hover:bg-primary-700 hover:text-white ${isActive(['/employees', '/dashboard'])}`}>
              Employee List
            </Link>
          </li>
          <li>
            <Link to="/add-employee" className={`block w-full p-2  hover:bg-primary-700 hover:text-white ${isActive(['/add-employee'])}`}>
              Add Employee
            </Link>
          </li>
          <li>
            <Link to="/logout" className={`block w-full p-2  hover:bg-primary-700 hover:text-white ${isActive(['/logout'])}`}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
