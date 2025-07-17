'use client';

import { useEffect } from 'react';

type PolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const PolicyModal = ({ isOpen, onClose, title, children }: PolicyModalProps) => {
  // Close modal when clicking outside or pressing Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('policy-modal');
      if (modal && event.target === modal) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="policy-modal"
      className={`modal font-arial ${isOpen ? 'block' : 'hidden'} fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]`}
    >  
      <div 
        className="modal-content w-[80%] md:w-[50%] bg-[#fefefe] max-w-[100%] p-[20px] border-[1px solid #888] rounded-[10px] max-height-[90vh] m-[2%] mx-auto shadow-[0_5px_15px_rgba(0,0,0,0.3)] animate-slide-down"
      >
        <span 
          className="close-btn text-[20px] md:text-[28px] font-bold text-[#aaa] float-right cursor-pointer leading-[1] hover:text-[#000] focus:text-[#000] hover:no-underline focus:no-underline"
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Enter' && onClose()}
          role="button"
          tabIndex={0}
          aria-label="Close modal"
        >
          &times;
        </span>
        <h2 className="font-bold m-[0] text-[20px] md:text-[22px]">{title}</h2>
        <div className="p-[0] leading-[1.6]">
          {children}
        </div>
      </div>
    </div>
  );
};

type PolicyContentProps = {
  id?: string;
  title?: string;
  effectiveDate?: string;
  children: React.ReactNode;
};

export const PolicyContent = ({ 
  id, 
  title, 
  effectiveDate, 
  children 
}: PolicyContentProps) => {
  return (

    <div 
      id={id} 
      className="policy-content font-arial text-[16px] leading-[1.6] py-[0] px-[0]" 
    >
      <hr className='h-[2px] my-[16px] bg-[#212529]' />
      {effectiveDate && (
        <p className="font-bold mb-[16px]" >
          Effective Date: {effectiveDate}
        </p>
      )}
      <div className="mt-[16px] text-left">
        {children}
      </div>
    </div>
  );
};
