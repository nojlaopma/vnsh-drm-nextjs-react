import React, { useState, useEffect, useRef, Children, ReactElement, cloneElement } from 'react';
import { cn } from '@/lib/utils';

export interface TabProps {
  label: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface TabsComposition {
  Tab: React.FC<TabProps>;
}

interface TabsProps {
  defaultActiveIndex?: number;
  activeTab?: number;
  onChange?: (index: number) => void;
  variant?: 'default' | 'pills' | 'underline' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  tabListClassName?: string;
  tabClassName?: string;
  tabContentClassName?: string;
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  indicatorPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const variantClasses = {
  default: {
    tab: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
    active: 'border-blue-500 text-blue-600',
  },
  pills: {
    tab: 'rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-50',
    active: 'bg-blue-50 text-blue-600',
  },
  underline: {
    tab: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2',
    active: 'border-blue-500 text-blue-600',
  },
  outline: {
    tab: 'border border-transparent text-gray-500 hover:bg-gray-50',
    active: 'border-gray-300 bg-white text-blue-600 shadow-sm',
  },
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

/**
 * A single tab component
 */
const Tab: React.FC<TabProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

/**
 * A tabs component that displays content in a tabbed interface
 */
const Tabs: React.FC<TabsProps> & TabsComposition = ({
  defaultActiveIndex = 0,
  activeTab: controlledActiveTab,
  onChange,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  className = '',
  tabListClassName = '',
  tabClassName = '',
  tabContentClassName = '',
  children,
  orientation = 'horizontal',
  indicatorPosition = 'bottom',
}) => {
  const isControlled = typeof controlledActiveTab !== 'undefined';
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Update active index if controlled from parent
  useEffect(() => {
    if (isControlled && controlledActiveTab !== activeIndex) {
      setActiveIndex(controlledActiveTab);
      updateIndicator(controlledActiveTab);
    }
  }, [controlledActiveTab, isControlled]);

  // Update indicator position when active tab changes
  useEffect(() => {
    updateIndicator(activeIndex);
  }, [activeIndex, variant, orientation]);

  const updateIndicator = (index: number) => {
    if (tabRefs.current[index] && tabListRef.current) {
      const tab = tabRefs.current[index];
      const tabList = tabListRef.current;

      if (!tab) return;

      const tabRect = tab.getBoundingClientRect();
      const tabListRect = tabList.getBoundingClientRect();

      if (orientation === 'horizontal') {
        setIndicatorStyle({
          left: tabRect.left - tabListRect.left,
          width: tabRect.width,
          height: 2,
          bottom: indicatorPosition === 'bottom' ? 0 : 'auto',
          top: indicatorPosition === 'top' ? 0 : 'auto',
        });
      } else {
        setIndicatorStyle({
          top: tabRect.top - tabListRect.top,
          height: tabRect.height,
          width: 2,
          right: indicatorPosition === 'right' ? 0 : 'auto',
          left: indicatorPosition === 'left' ? 0 : 'auto',
        });
      }
    }
  };

  const handleTabClick = (index: number) => {
    if (!isControlled) {
      setActiveIndex(index);
    }
    onChange?.(index);
  };

  const validChildren = Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as ReactElement<TabProps>[];

  const currentTabContent = validChildren[activeIndex]?.props?.children;

  return (
    <div
      className={cn(
        'w-full',
        orientation === 'vertical' ? 'flex' : 'block',
        className
      )}
    >
      <div
        ref={tabListRef}
        className={cn(
          'relative flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          variant === 'pills' ? 'gap-1' : '',
          tabListClassName
        )}
        role="tablist"
        aria-orientation={orientation}
      >
        {validChildren.map((child, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              ref={(el) => {
                if (el) {
                  tabRefs.current[index] = el;
                }
              }}
              className={cn(
                'font-medium transition-colors duration-200 focus:outline-none',
                variantClasses[variant].tab,
                isActive && variantClasses[variant].active,
                sizeClasses[size],
                fullWidth && 'flex-1 text-center',
                child.props.disabled && 'opacity-50 cursor-not-allowed',
                tabClassName,
                child.props.className
              )}
              role="tab"
              aria-selected={isActive}
              aria-disabled={child.props.disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => !child.props.disabled && handleTabClick(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (!child.props.disabled) {
                    handleTabClick(index);
                  }
                } else if (e.key === 'ArrowRight' && orientation === 'horizontal') {
                  e.preventDefault();
                  const nextIndex = (index + 1) % validChildren.length;
                  if (!validChildren[nextIndex].props.disabled) {
                    handleTabClick(nextIndex);
                    tabRefs.current[nextIndex]?.focus();
                  }
                } else if (e.key === 'ArrowLeft' && orientation === 'horizontal') {
                  e.preventDefault();
                  const prevIndex = (index - 1 + validChildren.length) % validChildren.length;
                  if (!validChildren[prevIndex].props.disabled) {
                    handleTabClick(prevIndex);
                    tabRefs.current[prevIndex]?.focus();
                  }
                } else if (e.key === 'ArrowDown' && orientation === 'vertical') {
                  e.preventDefault();
                  const nextIndex = (index + 1) % validChildren.length;
                  if (!validChildren[nextIndex].props.disabled) {
                    handleTabClick(nextIndex);
                    tabRefs.current[nextIndex]?.focus();
                  }
                } else if (e.key === 'ArrowUp' && orientation === 'vertical') {
                  e.preventDefault();
                  const prevIndex = (index - 1 + validChildren.length) % validChildren.length;
                  if (!validChildren[prevIndex].props.disabled) {
                    handleTabClick(prevIndex);
                    tabRefs.current[prevIndex]?.focus();
                  }
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  const firstEnabled = validChildren.findIndex((tab) => !tab.props.disabled);
                  if (firstEnabled !== -1) {
                    handleTabClick(firstEnabled);
                    tabRefs.current[firstEnabled]?.focus();
                  }
                } else if (e.key === 'End') {
                  e.preventDefault();
                  let lastEnabled = validChildren.length - 1;
                  while (lastEnabled >= 0 && validChildren[lastEnabled].props.disabled) {
                    lastEnabled--;
                  }
                  if (lastEnabled >= 0) {
                    handleTabClick(lastEnabled);
                    tabRefs.current[lastEnabled]?.focus();
                  }
                }
              }}
            >
              {child.props.label}
            </button>
          );
        })}
        {variant !== 'pills' && (
          <div
            className={cn(
              'absolute bg-blue-500 transition-all duration-200 ease-in-out',
              orientation === 'horizontal' ? 'h-0.5' : 'w-0.5'
            )}
            style={indicatorStyle}
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className={cn('mt-2', tabContentClassName)}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`tab-${activeIndex}`}
      >
        {currentTabContent}
      </div>
    </div>
  );
};

// Add Tab as a static property to Tabs
Tabs.Tab = Tab;

export default Tabs;
