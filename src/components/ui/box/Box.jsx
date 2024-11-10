import { forwardRef } from 'react';

export const Box = forwardRef(({ as: Component = 'div', children, className = '', ...props }, ref) => {
  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
});
