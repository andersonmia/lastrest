import React from 'react';
import Sidebar from '../components/Sidebar';
import EmployeeList from './EmployeeList';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <EmployeeList />
    </div>
  );
};

export default Dashboard;