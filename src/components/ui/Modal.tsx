import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
// Using inline SVG for the close icon to avoid external dependencies
const XIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={cn('w-5 h-5', className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footer?: React.ReactNode;
  footerClassName?: string;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  full: 'max-w-full mx-4',
};

/**
 * A reusable modal component with animations and accessibility features
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnClickOutside = true,
  closeOnEsc = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  contentClassName = '',
  headerClassName = '',
  bodyClassName = '',
  footer,
  footerClassName = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeOnClickOutside &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeOnClickOutside, onClose]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEsc) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  // Store the last focused element before opening the modal
  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      // Focus the modal when it opens
      setTimeout(() => {
        if (modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 10);
    } else if (lastFocusedElement.current) {
      // Return focus to the last focused element when the modal closes
      lastFocusedElement.current.focus();
      lastFocusedElement.current = null;
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto',
        'bg-black/50 backdrop-blur-sm transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        overlayClassName
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        ref={modalRef}
        className={cn(
          'relative w-full bg-white rounded-lg shadow-xl transform transition-all duration-300',
          'flex flex-col max-h-[90vh] overflow-hidden',
          sizeClasses[size],
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          className
        )}
        tabIndex={-1}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div
            className={cn(
              'flex items-center justify-between p-4 border-b border-gray-200',
              headerClassName
            )}
          >
            {title && (
              <h3
                id="modal-title"
                className="text-lg font-semibold text-gray-900"
              >
                {title}
              </h3>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="ml-auto -mr-2"
                aria-label="Close modal"
              >
                <XIcon />
              </Button>
            )}
          </div>
        )}

        {/* Body */}
        <div
          className={cn(
            'flex-1 p-6 overflow-y-auto',
            bodyClassName
          )}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            className={cn(
              'flex items-center justify-end gap-3 p-4 bg-gray-50 border-t border-gray-200',
              footerClassName
            )}
          >
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
