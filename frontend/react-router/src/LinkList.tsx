import React from 'react';
import { Link } from 'react-router-dom';

export const LinkList: React.FC = () => {
  return (
    <div>
      <Link to="/">Top Page (children)</Link>
      <Link to="/component">component</Link>
      <Link to="/render/nameless">render with nameless </Link>
      <Link to="/render/named">render with named </Link>
    </div>
  );
};
