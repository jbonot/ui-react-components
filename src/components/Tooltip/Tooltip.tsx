import React, { useCallback, useState } from 'react';
import './tooltip.scss';
import clsx from 'clsx';
import { useTimer } from '../../utils/useTimer';

export interface ITooltipProps {
  /**
   * Tooltip contents
   */
  label: string;

  position?: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip = ({
  children,
  label,
  position = 'top',
}: React.PropsWithChildren<ITooltipProps>) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const timer = useTimer({
    defaultDuration: 500,
    onComplete: () => setIsVisible(true)
  });

  const handleMouseEnter = useCallback(() => {
      timer.start();
  }, []);

  const handleMouseLeave = useCallback(() => {
    timer.cancel();
    setIsVisible(false);
  }, []);

  const getClasses = useCallback(() => {
    const classes = {
      'tooltip': true,
      'tooltip--top': position === 'top',
      'tooltip--bottom': position === 'bottom',
      'tooltip--left': position === 'left',
      'tooltip--right': position === 'right',
      'tooltip--visible': isVisible,
    };

    return clsx(classes);
  }, [position, isVisible]);
  
  return (
    <div className={getClasses()}>
      <div
        className="tooltip--target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      <div className="tooltip--content">
        {label}
      </div>
    </div>
  );
};
