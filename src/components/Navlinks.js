import { NavLink } from 'react-router-dom';
import links from '../utils/links';

import React from 'react';

const Navlinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link, index) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            onClick={toggleSidebar}
            to={path}
            key={id}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
