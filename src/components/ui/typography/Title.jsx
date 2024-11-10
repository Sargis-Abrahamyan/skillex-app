import '../../../styles/typography/title.css';

export const Title = ({ children, as: Component = 'h1', size = 'lg', className = '', ...props }) => (
  <Component className={`title ${size} ${className}`} {...props}>
    {children}
  </Component>
);
