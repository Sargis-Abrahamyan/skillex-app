import { Box } from '../ui';
import '../../styles/flex.css';

const FlexLayout = ({ as, children, className = '', ...props }) => (
  <Box as={as} className={`flex-container ${className}`} {...props}>
    {children}
  </Box>
);

export default FlexLayout;
