import FlexLayout from '../../../layout/FlexLayout';
import { Box } from '../../../ui';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import { SideBarCategory, SideBarBrend, SideBarPricing } from './filters';
import styles from './sideBar.module.css';

const SideBar = ({ showSideBar, onSidebarClose }) => {
  return (
    <Box className={`${styles.overlayBackground} ${showSideBar ? styles.activeSideBar : ''}`} onClick={onSidebarClose}>
      <FlexLayout as='aside' className={`${styles.sideBar} flex-column`} onClick={(e) => e.stopPropagation()}>
        <SidebarHeader onSidebarClose={onSidebarClose} />
        <SideBarCategory />
        <SideBarBrend />
        <SideBarPricing />
      </FlexLayout>
    </Box>
  );
};

export default SideBar;
