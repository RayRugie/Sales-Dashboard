"use client"
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import React, { useState, useEffect } from 'react';
import IconSidebar from './IconSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeMobileSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black text-white">
      {/* Icon Sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <IconSidebar />
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${isMobile ? 'fixed left-0 top-0 z-50 h-full' : ''} ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
        <Sidebar onClose={closeMobileSidebar} isMobile={isMobile} />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header 
          onToggleSidebar={toggleSidebar} 
          sidebarOpen={sidebarOpen}
          isMobile={isMobile}
        />
        <main className="flex-1 overflow-y-auto bg-black min-h-0">{children}</main>
      </div>
    </div>
  );
}