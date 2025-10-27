
import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement>;

export const BMWLogo: React.FC<SVGProps> = (props) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z" />
    <path fill="#fff" d="M256 448c106.039 0 192-85.961 192-192S362.039 64 256 64 64 149.961 64 256s85.961 192 192 192z" />
    <path d="M256 384c70.692 0 128-57.308 128-128H128c0 70.692 57.308 128 128 128z" />
    <path fill="#0088cc" d="M256 256h128c0-70.692-57.308-128-128-128v128zM128 256c0-70.692 57.308-128 128-128v128H128z" />
  </svg>
);

export const ContactIcon: React.FC<SVGProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 3L2 10l7.3 2.1L11.4 19l9.6-16z"/>
    </svg>
);

export const SettingsIcon: React.FC<SVGProps> = (props) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
);

export const LightControls: React.FC<SVGProps> = (props) => (
    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

export const ViewControls: React.FC<SVGProps & { variant?: 'filled' }> = ({ variant, ...props }) => (
    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" {...props}>
        {variant === 'filled' ? (
            <path fill="currentColor" stroke="none" d="M12.74,2.37a1,1,0,0,0-1.48,0L5.43,8.2A2,2,0,0,0,7,11.62V20a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V11.62a2,2,0,0,0,1.54-3.42Z" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        )}
    </svg>
);


export const WheelControls: React.FC<SVGProps> = (props) => (
  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const ArrowUpIcon: React.FC<SVGProps> = (props) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);
