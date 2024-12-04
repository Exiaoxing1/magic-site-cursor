import { FC } from 'react';

interface PlatformIconProps {
  platform: 'vscode' | 'sublime' | 'chrome' | 'github';
  className?: string;
}

const icons = {
  vscode: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 0L18.3 .8L7.1 12L18.3 23.2L17.5 24L6.3 12.8L1.5 8L2.3 7.2L6.3 11.2L17.5 0Z"/>
    </svg>
  ),
  sublime: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.9 6.6L12 2L2.1 6.6L12 11.3L21.9 6.6ZM2.1 17.4L12 22L21.9 17.4L12 12.7L2.1 17.4ZM21.9 11.3L12 6.6L2.1 11.3L12 16L21.9 11.3Z"/>
    </svg>
  ),
  chrome: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"/>
      <path d="M12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7Z"/>
    </svg>
  ),
  github: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12C2 16.3 4.9 19.9 8.8 21.2C9.3 21.3 9.5 21 9.5 20.7V19.1C6.7 19.7 6.1 17.9 6.1 17.9C5.7 16.8 5.1 16.5 5.1 16.5C4.3 15.9 5.2 15.9 5.2 15.9C6.1 16 6.6 16.9 6.6 16.9C7.5 18.4 8.9 18 9.5 17.7C9.6 17.1 9.9 16.7 10.2 16.5C8 16.2 5.7 15.3 5.7 11.5C5.7 10.4 6.1 9.5 6.6 8.8C6.5 8.5 6.2 7.5 6.7 6.1C6.7 6.1 7.6 5.8 9.5 7C10.3 6.8 11.2 6.7 12 6.7C12.8 6.7 13.7 6.8 14.5 7C16.4 5.8 17.3 6.1 17.3 6.1C17.8 7.5 17.5 8.5 17.4 8.8C17.9 9.5 18.3 10.4 18.3 11.5C18.3 15.3 16 16.2 13.8 16.5C14.2 16.8 14.5 17.4 14.5 18.3V20.7C14.5 21 14.7 21.3 15.2 21.2C19.1 19.9 22 16.3 22 12C22 6.5 17.5 2 12 2Z"/>
    </svg>
  )
};

export const PlatformIcon: FC<PlatformIconProps> = ({ platform, className = '' }) => {
  return (
    <span className={className}>
      {icons[platform]}
    </span>
  );
}; 