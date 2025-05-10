import { useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  HomeIcon,
  UserGroupIcon,
  FolderIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { name: 'Dashboard', icon: <HomeIcon className="h-5 w-5" />, href: '#' },
    { name: 'Team', icon: <UserGroupIcon className="h-5 w-5" />, href: '#' },
    { name: 'Projects', icon: <FolderIcon className="h-5 w-5" />, href: '#' },
    { name: 'Calendar', icon: <CalendarIcon className="h-5 w-5" />, href: '#' },
    { name: 'Reports', icon: <ChartBarIcon className="h-5 w-5" />, href: '#' },
  ];

  const secondaryItems = [
    { name: 'Notifications', icon: <BellIcon className="h-5 w-5" />, href: '#' },
    { name: 'Settings', icon: <CogIcon className="h-5 w-5" />, href: '#' },
    { name: 'Help', icon: <QuestionMarkCircleIcon className="h-5 w-5" />, href: '#' },
  ];

  return (
    <div className={`flex h-screen bg-black text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col w-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && <h1 className="text-xl font-bold">LOGO</h1>}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            {collapsed ? (
              <ChevronDoubleRightIcon className="h-5 w-5" />
            ) : (
              <ChevronDoubleLeftIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200 ${
                    collapsed ? 'justify-center' : ''
                  }`}
                >
                  <span className="text-gray-300">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>

          {/* Secondary Navigation */}
          <ul className="space-y-1 p-2 mt-4 border-t border-gray-800">
            {secondaryItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200 ${
                    collapsed ? 'justify-center' : ''
                  }`}
                >
                  <span className="text-gray-300">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile (Optional) */}
        {!collapsed && (
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-xs">JD</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;