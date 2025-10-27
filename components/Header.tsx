
import React from 'react';
import { ContactIcon, SettingsIcon } from './icons';

const NavLink: React.FC<{ children: React.ReactNode; isActive?: boolean }> = ({ children, isActive }) => (
  <a
    href="#"
    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
      isActive ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-gray-300'
    }`}
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center z-20">
      <div className="flex items-center gap-8">
        <img src="https://i.imgur.com/Mgnt6Yw.png" alt="Car Brand Logo" className="w-10 h-10 object-contain" />
        <nav className="hidden md:flex items-center gap-2">
          <NavLink isActive>Models</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Experience</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>BMW</NavLink>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-primary text-on-primary px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-transform duration-300 hover:scale-105">
          <ContactIcon className="w-4 h-4" />
          <span>Contact Dealer</span>
        </button>
        <button className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-300">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
