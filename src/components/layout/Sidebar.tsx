"use client"
// layout/Sidebar.tsx
import { 
  ChevronRight,
  ChevronDown,
  X
} from 'lucide-react';
import { useState } from 'react';
import { SubItem, LinkItem } from '../../../types/SideBar';//the sidebar interfaces are stored in this location

const links: LinkItem[] = [

  { label: 'Sales', path: '/sales' },
  { label: 'CRM Analytics', path: '/crm-analytics' },
  { label: 'Orders', path: '/orders' },
  { 
    label: 'Cryptocurrency', 
    subItems: [
      { label: 'Cryptocurrency V1', path: '/cryptocurrency/v1' },
      { label: 'Cryptocurrency V2', path: '/cryptocurrency/v2' }
    ]
  },
  { 
    label: 'Banking', 
    subItems: [
      { label: 'Banking V1', path: '/banking/v1' },
      { label: 'Banking V2', path: '/banking/v2' }
    ]
  },
  { label: 'Personal', path: '/personal' },
  { label: 'CMS Analytics', path: '/cms-analytics' },
  { label: 'Influencer', path: '/influencer' },
  { label: 'Travel', path: '/travel' },
  { label: 'Teacher', path: '/teacher' },
  { label: 'Education', path: '/education' },
  { label: 'Authors', path: '/authors' },
  { label: 'Doctor', path: '/doctor' },
  { label: 'Employees', path: '/employees' },
  { label: 'Workspaces', path: '/workspaces' },
  { label: 'Meetings', path: '/meetings' },
  { label: 'Projects Board', path: '/projects-board' },
  { label: 'Widget UI', path: '/widget-ui' },
  { label: 'Widget Contact', path: '/widget-contact' }
];

interface SidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export function Sidebar({ onClose, isMobile = false }: SidebarProps) {
  const [active, setActive] = useState('Sales');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const handleItemClick = (item: LinkItem) => {
    if (item.subItems) {
      toggleExpanded(item.label);
    } else {
      setActive(item.label);
      // Close mobile sidebar when item is clicked
      if (isMobile && onClose) {
        onClose();
      }
    }
  };

  const handleSubItemClick = (subItem: SubItem) => {
    setActive(subItem.label);
    // Close mobile sidebar when sub-item is clicked
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <aside 
      className={`h-full bg-black border-r border-gray-800 overflow-y-auto ${
        isMobile ? 'w-80' : 'w-64 hidden lg:block'
      }`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none', 
      }}
    >
      <style jsx>{`
        aside::-webkit-scrollbar {
          display: none; 
        }
      `}</style>
      <div className="p-6">
        {/* Mobile Header with Close Button */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-semibold text-white">Dashboards</div>
            <button title='Close Sidebar'
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        )}
        
        {/* Desktop Header */}
        {!isMobile && (
          <div className="text-xl font-semibold text-white mb-6">Dashboards</div>
        )}
        
        <nav className="flex flex-col gap-1">
          {links.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => handleItemClick(item)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-all hover:bg-gray-800 ${
                  active === item.label && !item.subItems
                    ? 'bg-gray-800  text-blue-500' 
                    : 'text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{item.label}</span>
                </div>
                {item.subItems && (
                  expandedItems.includes(item.label) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )
                )}
              </button>
              
              {item.subItems && expandedItems.includes(item.label) && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={() => handleSubItemClick(subItem)}
                      className={`flex items-center w-full px-3 py-2 rounded-md text-sm transition-all hover:bg-gray-800 ${
                        active === subItem.label
                          ? 'bg-gray-800 text-white' 
                          : 'text-gray-400'
                      }`}
                    >
                      <span className="text-xs">○</span>
                      <span className="ml-2">{subItem.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}