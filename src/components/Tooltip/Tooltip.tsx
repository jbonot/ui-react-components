import React, { useCallback } from 'react';
import './tooltip.css';
import clsx from 'clsx';

interface TooltipProps {
  /**
   * Tooltip contents
   */
  label: string;
}

export const Tooltip = ({
  label,
  ...props
}: TooltipProps) => {

  const getClasses = useCallback(() => {
    const classes = {
      'tooltip': true,
      'tooltip--top': true
    };

    return clsx(classes);
  }, []);
  
  return (
    <div className={getClasses()}>
      <div className="tooltip--content">
        {label}
      </div>
    </div>
  );
};
