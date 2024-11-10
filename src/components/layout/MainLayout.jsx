import { Box } from '../ui';
import FlexLayout from './FlexLayout';

const MainLayout = ({ children }) => (
  <Box as='main' className='mainGridLayout'>
    <FlexLayout className='flex-center'>{children}</FlexLayout>
  </Box>
);

export default MainLayout;
