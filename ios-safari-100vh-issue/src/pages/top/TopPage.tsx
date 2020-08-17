import * as React from 'react';
import { Link } from 'react-router-dom';

export const TopPage = () => {
  return (
    <div>
      <div><Link to="/flex">flex</Link></div>
      <div><Link to="/grid">grid</Link></div>
    </div>
  );
};
