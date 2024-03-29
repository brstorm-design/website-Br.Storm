import React from 'react';
import styles from './Pin.module.scss';

export default function Pin({ className, ...rest }) {
  return (
    <div className={`${styles.pin} ${className}`} {...rest}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="6" fill="currentColor" />
        <circle r="2" transform="matrix(1 0 0 -1 6 6)" fill="#D5D5D5" />
      </svg>
    </div>
  )
}
