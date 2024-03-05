import React, { useCallback } from 'react';
import './tooltip.css';
import clsx from 'clsx';

export interface ITooltipProps {
  /**
   * Tooltip contents
   */
  label: string;

  position?: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip = ({
  label,
  position = 'top',
  ...props
}: ITooltipProps) => {

  const getClasses = useCallback(() => {
    const classes = {
      'tooltip': true,
      'tooltip--top': position === 'top',
      'tooltip--bottom': position === 'bottom',
      'tooltip--left': position === 'left',
      'tooltip--right': position === 'right',
    };

    return clsx(classes);
  }, [position]);
  
  return (
    <div className={getClasses()}>
      <div className="tooltip--content">
        {label}
      </div>
    </div>
  );
};
