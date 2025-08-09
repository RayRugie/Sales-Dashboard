// layout/Header.tsx
import { ChevronLeft, Search, Bell,  CreditCard, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { headerProps } from 'types/Header'

export function Header({ onToggleSidebar, sidebarOpen = true, isMobile = false }: headerProps) {
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black border-r border-gray-800 border-b">
      {/* Left side - Sidebar toggle */}
      <div className="flex items-center gap-4">
        {isMobile ? (
          <button 
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-800 rounded-md transition-colors hover:cursor-pointer"
          >
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
        ) : (
          <button 
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-800 rounded-md transition-colors hover:cursor-pointer"
          >
            <ChevronLeft className={`w-5 h-5 text-gray-400 transition-transform ${sidebarOpen ? 'rotate-0' : 'rotate-180'}`} />
          </button>
        )}
      </div>

      {/* Mobile Search Toggle */}
      {isMobile && !showSearch && (
        <button
          onClick={() => setShowSearch(true)}
          className="p-2 hover:bg-gray-800 rounded-md transition-colors"
        >
          <Search className="w-5 h-5 text-gray-400" />
        </button>
      )}

      {/* Right side - Icons and profile */}
      <div className={`flex items-center gap-3 ${isMobile && showSearch ? 'hidden' : ''}`}>
        {/* Search bar - Desktop */}
        {!isMobile && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-64 pl-10 pr-12 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-300 placeholder-gray-400"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-400 bg-gray-700 border border-gray-600 rounded">
                /
              </kbd>
            </div>
          </div>
        )}
        
        {/* Notifications */}
        <button title='Notification' className="p-2 hover:bg-gray-800 rounded-md transition-colors relative">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500" />
        </button>
        
        {/* Documentation/Book icon */}
        <button title='Cards' className="p-2 hover:bg-gray-800 rounded-md transition-colors relative">
          <CreditCard className="w-5 h-5 text-gray-400" />
        </button>

        {/* Profile */}
        <button className="p-2 hover:bg-gray-800 rounded-md transition-colors relative">
          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-white">U</span>
          </div>
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500" />
        </button>
      </div>

      {/* Mobile Search Bar */}
      {isMobile && showSearch && (
        <div className="flex-1 mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-12 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-300 placeholder-gray-400"
              autoFocus
            />
            <button title='Search'
              onClick={() => setShowSearch(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}