import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
// Using inline SVG for the chevron icon to avoid external dependencies
const ChevronDown = ({ className = '' }: { className?: string }) => (
  <svg
    className={cn('w-5 h-5 transition-transform duration-200', className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
  }[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | number[];
  className?: string;
  itemClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * A single accordion item component
 */
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
  className = '',
  buttonClassName = '',
  contentClassName = '',
  icon,
  iconPosition = 'right',
  disabled = false,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | string>('auto');

  // Update content height when isOpen changes
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const Icon = icon || (
    <ChevronDown
      className={cn(
        isOpen ? 'rotate-180' : 'rotate-0'
      )}
    />
  );

  return (
    <div className={cn('border-b border-gray-200', className)}>
      <button
        type="button"
        className={cn(
          'flex items-center justify-between w-full p-4 text-left focus:outline-none',
          'transition-colors duration-200',
          disabled
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-gray-50 text-gray-900',
          buttonClassName
        )}
        onClick={onToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        {iconPosition === 'left' && !disabled && (
          <span className="mr-2">{Icon}</span>
        )}
        <span className="flex-1 font-medium">{title}</span>
        {iconPosition === 'right' && !disabled && (
          <span className="ml-2">{Icon}</span>
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200 ease-in-out',
          contentClassName
        )}
        style={{ height: isOpen ? contentHeight : 0 }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="p-4 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * A reusable accordion component that can have multiple or single open items
 */
const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
} = ({
  items,
  allowMultiple = false,
  defaultOpenIndex = 0,
  className = '',
  itemClassName = '',
  buttonClassName = '',
  contentClassName = '',
  icon,
  iconPosition = 'right',
}) => {
  // Initialize open state based on defaultOpenIndex
  const [openIndices, setOpenIndices] = useState<number[]>(() => {
    if (Array.isArray(defaultOpenIndex)) {
      return defaultOpenIndex;
    }
    return defaultOpenIndex >= 0 ? [defaultOpenIndex] : [];
  });

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndices.includes(index)}
          onToggle={() => toggleItem(index)}
          className={itemClassName}
          buttonClassName={buttonClassName}
          contentClassName={contentClassName}
          icon={icon}
          iconPosition={iconPosition}
          disabled={item.disabled}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

// Add Item as a static property to Accordion
Accordion.Item = AccordionItem;

export default Accordion;
