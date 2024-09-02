// src/components/TabSwitcher.tsx
import React, { useState, useEffect } from "react";

type Tab = {
  id: string;
  label: string;
};

type TabSwitcherProps = {
  tabs: Tab[];
  activeTabId?: string; // External control of the active tab
  onTabChange?: (id: string) => void; // Callback for tab change
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  useEffect(() => {
    if (activeTabId) {
      setActiveTab(activeTabId);
    }
  }, [activeTabId]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <div>
      <div className="tabs tabs-sm tabs-boxed">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={`tab ${tab.id === activeTab ? "tab-active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleTabClick(tab.id);
            }}
            href="#"
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
