import React from 'react';

const NavBar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-20 bg-gray-900 text-white flex flex-col items-center py-8 space-y-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="text-white">Logo</a>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex flex-col items-center space-y-8">
          {/* Explore */}
          <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a8.175 8.175 0 00-3.207.694 9.147 9.147 0 00-3.1 2.334C4.2 8.202 3.754 9.13 3.5 10.1c-.254.97-.26 2.015-.08 3.024.18 1.01.66 2.064 1.407 2.846.747.782 1.769 1.391 2.993 1.794 1.224.403 2.61.582 3.977.53 1.367-.053 2.685-.363 3.758-.87a9.02 9.02 0 003.06-2.61 7.989 7.989 0 001.388-4.31 8.087 8.087 0 00-2.675-6.09A8.272 8.272 0 0012 4.354z"
              />
            </svg>
            <span className="text-xs">Explore</span>
          </a>

          {/* Ask AI */}
          <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM12 12v8m-4-4h8"
              />
            </svg>
            <span className="text-xs">Ask AI</span>
          </a>

          {/* My Ideas */}
          <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m0 0H9m3 0V4m-7 16h14"
              />
            </svg>
            <span className="text-xs">My Ideas</span>
          </a>

          {/* Chat */}
          <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h5m-6 8h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs">Chat</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
