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
      className="modal font-arial"
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        zIndex: 9999,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    >
      <div 
        className="modal-content"
        style={{
          backgroundColor: '#fefefe',
          margin: '2% auto',
          padding: '20px',
          border: '1px solid #888',
          width: '50%',
          maxWidth: '100%',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          borderRadius: '10px',
          animation: 'modalopen 0.4s',
          maxHeight: '90vh',
          
        }}
      >
        <style jsx>{`
          @keyframes modalopen {
            from { opacity: 0; transform: translateY(-200px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .modal-content {
            width: 100%;
            max-width: 80%;
          }
          
          @media (max-width: 1024px) {
            .modal-content {
              max-width: 90%;
              margin: 4% auto !important;
            }
          }
          
          @media (max-width: 768px) {
            .modal-content {
              max-width: 100% !important;
              margin: 0 !important;
              border-radius: 0 !important;
              height: 100vh;
              max-height: 100vh !important;
              padding: 15px !important;
              border: none !important;
            }
          }
          .close-btn {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            line-height: 1;
          }
          .close-btn:hover,
          .close-btn:focus {
            color: #000;
            text-decoration: none;
          }
          .modal-title {
            font-weight: bold;
            margin: 0;
            font-size: 1.5rem;
          }
          .modal-body {
            padding: 0;
            line-height: 1.6;
          }
        `}</style>
        <span 
          className="close-btn"
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Enter' && onClose()}
          role="button"
          tabIndex={0}
          aria-label="Close modal"
        >
          &times;
        </span>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-body">
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
      <style jsx>{`
        .policy-content h1,
        .policy-content h2,
        .policy-content h3,
        .policy-content h4,
        .policy-content h5,
        .policy-content h6 {
          margin: 1.5em 0 0.8em 0;
          font-weight: bold;
        }
        .policy-content h1 { font-size: 1.8em; }
        .policy-content h2 { font-size: 1.6em; }
        .policy-content h3 { font-size: 1.4em; }
        .policy-content h4 { font-size: 1.2em; }
        .policy-content h5 { font-size: 1.1em; }
        .policy-content h6 { font-size: 1em; }
        
        .policy-content p {
          margin: 0 0 1em 0;
          line-height: 1.6;
        }
        
        .policy-content ul,
        .policy-content ol {
          margin: 0 0 1em 1.5em;
          padding: 0;
        }
        
        .policy-content ul {
          list-style-type: disc;
        }
        
        .policy-content ol {
          list-style-type: decimal;
        }
        
        .policy-content li {
          margin-bottom: 0.5em;
        }
        
        .policy-content a {
          color: #007bff;
          text-decoration: none;
        }
        
        .policy-content a:hover {
          text-decoration: underline;
        }
        
        .policy-content strong {
          font-weight: bold;
        }
        
        .policy-content em {
          font-style: italic;
        }
        
        .policy-content u {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
