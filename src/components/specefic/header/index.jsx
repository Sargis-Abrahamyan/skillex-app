import { FILTER_BUTTON_LABEL } from '../../../constants';
import { useSideBar } from '../../../context/sideBarContext';
import { Box, Button } from '../../ui';
import SideBar from './sideBar/SideBar';
import styles from './header.module.css';

const Header = () => {
  const { showSideBar, handleSideBarShow, handleCloseSideBar } = useSideBar();
  return (
    <Box as='header' className={styles.header}>
      <Box className='mainGridLayout'>
        <Button variant='allFilters' onClick={handleSideBarShow} children={FILTER_BUTTON_LABEL} />
      </Box>
      <SideBar onSidebarClose={handleCloseSideBar} showSideBar={showSideBar} />
    </Box>
  );
};

export default Header;
