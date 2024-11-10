import '../../../styles/typography/text.css';

export const Text = ({ children, as: Component = 'p', size = 'md', className = '', ...props }) => (
  <Component className={`text ${size} ${className}`} {...props}>
    {children}
  </Component>
);
