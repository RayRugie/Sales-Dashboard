"use client";
import React, { useState } from "react";
import Image from "next/image";

interface IconProps {
  className?: string;
}

// Custom SVG Icon Components with typing
const DashboardIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/dashboard.svg"
    alt="Dashboards"
    width={20}
    height={20}
    className={className}
  />
);

const AppsIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/apps.svg"
    alt="Apps"
    width={20}
    height={20}
    className={className}
  />
);

const ComponentIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/components.svg"
    alt="Components"
    width={20}
    height={20}
    className={className}
  />
);

const DocumentationIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/documentation.svg"
    alt="Documentation"
    width={20}
    height={20}
    className={className}
  />
);

const FormsIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/forms.svg"
    alt="Forms"
    width={20}
    height={20}
    className={className}
  />
);

const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/logo.svg"
    alt="Logo"
    width={24}
    height={24}
    className={className}
  />
);

const PrototypesIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/prototype.svg"
    alt="Prototypes"
    width={20}
    height={20}
    className={className}
  />
);

const SettingsIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/settings.svg"
    alt="Settings"
    width={20}
    height={20}
    className={className}
  />
);

const TablesIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/tables.svg"
    alt="Tables"
    width={20}
    height={20}
    className={className}
  />
);

interface IconItem {
  id: string;
  icon: React.FC<IconProps>;
  tooltip: string;
  path: string;
}

const IconSidebar: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string>("dashboards");

  const iconItems: IconItem[] = [
    { id: "dashboards", icon: DashboardIcon, tooltip: "Dashboards", path: "/dashboards" },
    { id: "apps", icon: AppsIcon, tooltip: "Apps", path: "/apps" },
    { id: "prototypes", icon: PrototypesIcon, tooltip: "Prototypes", path: "/prototypes" },
    { id: "tables", icon: TablesIcon, tooltip: "Tables", path: "/tables" },
    { id: "forms", icon: FormsIcon, tooltip: "Forms", path: "/forms" },
    { id: "components", icon: ComponentIcon, tooltip: "Components", path: "/components" },
    { id: "docs", icon: DocumentationIcon, tooltip: "Documentation", path: "/docs" },
  ];

  return (
    <div className="hidden lg:flex flex-col items-center bg-black w-16 h-screen py-4 space-y-2">
      {/* Logo icon at top */}
      <div className="mb-4">
        <div className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors cursor-pointer">
          <LogoIcon className="w-6 h-6 text-blue-400" />
        </div>
      </div>

      {/* Main navigation icons */}
      <div className="flex flex-col space-y-2">
        {iconItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = item.id === activeIcon;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => setActiveIcon(item.id)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                }`}
                title={item.tooltip}
              >
                <IconComponent className="w-5 h-5" />
              </button>

              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.tooltip}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom section */}
      <div className="flex-1"></div>

      <div className="flex flex-col space-y-2">
        <div className="relative group">
          <button title="Settings">
            <div className="p-2 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-800 transition-colors cursor-pointer">
              <SettingsIcon className="w-5 h-5 bg" />
            </div>
          </button>

          {/* Settings tooltip */}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Settings
          </div>
        </div>

        {/* Profile avatar */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700 cursor-pointer hover:border-gray-600 transition-colors">
            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export default IconSidebar;
